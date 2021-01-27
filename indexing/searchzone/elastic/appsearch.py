import logging

from elastic_enterprise_search import AppSearch

LOGGER = logging.getLogger(__name__)
logging.getLogger("elastic_transport").setLevel(logging.WARNING)


class AppSearchConnector:
    def __init__(self, url, key, engine):
        self.url = url
        self.key = key
        self.engine = engine
        try:
            self.app_search = AppSearch(url, http_auth=self.key)
        except:
            LOGGER.critical("Couldn't create AppSerch Client")
            raise

    def insert_new_document(self, body):
        try:
            self.app_search.index_documents(engine_name=self.engine, body=body)
        # ToDo Error Handling for response
        except:
            LOGGER.critical("Something went wrong with elastic for domain: %s", str(body))

    def update_existing_document(self, body):
        try:
            self.app_search.put_documents(engine_name=self.engine, body=body)
            LOGGER.debug("Updated document: %s", str(body))
        # ToDo Error Handling for response
        except:
            LOGGER.critical("Something went wrong with elastic for domain: %s", str(body))

    def search_document(self, body):
        try:
            return self.app_search.search(engine_name=self.engine, body=body)
        except:
            LOGGER.critical("Something went wrong with elastic for domain: %s", str(body))
