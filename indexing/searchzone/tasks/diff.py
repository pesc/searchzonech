import logging

from searchzone.tasks.helper import check_dot_end
from searchzone.tasks.new import new_adding

LOGGER = logging.getLogger(__name__)


def diff(appsearch, queue):
    while True:
        domain = queue.get()
        valid = None
        if check_dot_end(domain):
            domain = domain[:-1]
        result = appsearch.search_document(get_question_query(domain))
        for result in result['results']:
            for value in result['id'].values():
                valid = value
        if not valid:
            LOGGER.debug("Domain missing " + domain)
            new_adding(appsearch, domain)
        queue.task_done()


def get_question_query(domain):
    return \
        {
            "query": domain,
            "search_fields": {
                "id": {}
            },
            "page": {
                "size": 1
            },
            "result_fields": {
                "id": {
                    "raw": {}
                }
            }
        }
