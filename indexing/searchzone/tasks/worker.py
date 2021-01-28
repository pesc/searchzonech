import logging
import queue
import threading
from time import sleep

from searchzone.tasks.helper import read_file_and_add_to_queue
from searchzone.elastic.appsearch import AppSearchConnector
from searchzone.tasks.update import outdated
from searchzone.tasks.new import new
from searchzone.tasks.diff import diff
from searchzone.tasks.delete import delete
from searchzone.tasks.email import email

LOGGER = logging.getLogger(__name__)


class Worker:
    def __init__(self, url, engine, key, file=None):
        self.url = url
        self.engine = engine
        self.key = key
        self.file = file
        self.appsearch = AppSearchConnector(self.url, self.key, self.engine)
        self.domain_queue = queue.Queue()
        LOGGER.debug('Performing requests on: %s engine: %s with file: %s', self.url, self.engine, self.file)

    def update(self):
        # ToDo: Fix problem with overwriting info_mail
        for _ in range(10):
            threading.Thread(target=new, args=[self.appsearch, self.domain_queue], daemon=True).start()
        self.domain_queue.join()
        for i in range(2500):
            LOGGER.info('Starting updating 1000 users to %d', i * 1000)
            outdated(self.appsearch, self.domain_queue)
            LOGGER.info('Sleeping for 300 seconds to let elastic and threads do their job')
            sleep(300)

    def new(self):
        LOGGER.info('Starting threads for Action NEW')
        read_file_and_add_to_queue(self.domain_queue, self.file)
        for _ in range(10):
            threading.Thread(target=new, args=[self.appsearch, self.domain_queue], daemon=True).start()
        self.domain_queue.join()

    def diff(self):
        LOGGER.info('Starting threads for Action DIFF')
        read_file_and_add_to_queue(self.domain_queue, self.file)
        for _ in range(10):
            threading.Thread(target=diff, args=[self.appsearch, self.domain_queue], daemon=True).start()
        self.domain_queue.join()

    def delete(self):
        LOGGER.info('Delete')
        read_file_and_add_to_queue(self.domain_queue, self.file)
        for _ in range(10):
            threading.Thread(target=delete, args=[self.appsearch, self.domain_queue], daemon=True).start()
        self.domain_queue.join()

    def email(self):
        LOGGER.info('email')
        read_file_and_add_to_queue(self.domain_queue, self.file)
        for _ in range(10):
            threading.Thread(target=email, args=[self.appsearch, self.domain_queue], daemon=True).start()
        self.domain_queue.join()
