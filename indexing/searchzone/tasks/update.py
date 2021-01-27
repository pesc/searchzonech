import logging
from datetime import datetime, timezone, timedelta

from searchzone.tasks.helper import timestamp_now

LOGGER = logging.getLogger(__name__)


def outdated(appsearch, queue):
    local_time = datetime.now(timezone.utc).astimezone()
    outdated_time = local_time - timedelta(days=3)
    body = {
        "query": "true",
        "search_fields": {
            "valid_domain": {}
        },
        "filters": {
            "timestamp": {
                "from": "1900-01-01T12:00:00+00:00",
                "to": outdated_time
            }
        },
        "sort": {
            "timestamp": "asc"
        },
        "page": {
            "size": 1000
        },
        "result_fields": {
            "id": {
                "raw": {}
            }
        }
    }
    results = appsearch.search_document(body)
    for result in results['results']:
        for value in result['id'].values():
            queue.put(value)
