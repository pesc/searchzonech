import logging

from searchzone.tasks.helper import timestamp_now, check_dot_end

LOGGER = logging.getLogger(__name__)


def email(appsearch, queue):
    while True:
        domain = queue.get()
        local_time = timestamp_now()
        if check_dot_end(domain):
            domain = domain[:-1]
        body = {'id': domain, 'valid_info': True, 'timestamp': str(local_time.isoformat())}
        LOGGER.debug("Adding info@ for: %s", domain)
        appsearch.update_existing_document(body)
        queue.task_done()
