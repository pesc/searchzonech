import logging
import idna

from searchzone.tasks.helper import timestamp_now, check_dot_end, get_record

LOGGER = logging.getLogger(__name__)


def new(appsearch, queue):
    while True:
        domain = queue.get()
        new_adding(appsearch, domain)
        queue.task_done()



def new_adding(appsearch, domain):
    answer = {}
    rr_list = ['A', 'AAAA', 'NS', 'TXT', 'MX', 'DS', 'DNSKEY']
    local_time = timestamp_now()
    timeout = 3.0
    if check_dot_end(domain):
        domain = domain[:-1]
    answer['id'] = domain
    answer['valid_domain'] = True
    answer['timestamp'] = str(local_time.isoformat())
    LOGGER.debug('Adding domain: %s', domain)
    try:
        answer['domain'] = idna.decode(domain)
        get_record(domain, rr_list, answer, timeout)
    except idna.IDNAError:
        answer['domain'] = domain
    appsearch.insert_new_document(answer)
