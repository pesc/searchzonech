import argparse
import logging
import sys
import yaml
from time import sleep

from searchzone import setup_logging
from searchzone.tasks.worker import Worker


LOGGER = logging.getLogger(__name__)


class Cli:
    def __init__(self):
        parser = argparse.ArgumentParser(
            description='Searchzone Data Management',
            formatter_class=argparse.RawDescriptionHelpFormatter
        )
        parser.add_argument('--verbose', '-v', action='store_true', help="show debug messages.")
        parser.add_argument('--logfile', default='./searchzone.log', help='path to log file')
        parser.add_argument('--config', '-c', help='path to config file')
        parser.add_argument('--url', '-u', help='Set URL to AppSearch')
        parser.add_argument('--engine', '-e', help='Set Engine name')
        parser.add_argument('--key', '-k', help='Set write API-Key')

        subparsers = parser.add_subparsers(help='sub-command', metavar='{sub-command}', required=True)

        subparser = subparsers.add_parser('update', description='Update existing documents',
                                          help='Update existing documents')
        subparser.set_defaults(func=self.update)

        subparser = subparsers.add_parser('new', description='Add new documents', help='Add new documents')
        subparser.add_argument('-f', '--file', help="Filename with domains", metavar="FILE", required=True)
        subparser.set_defaults(func=self.new)

        subparser = subparsers.add_parser('delete', description='Mark document as invalid',
                                          help='Mark document as invalid')
        subparser.add_argument('-f', '--file', help="Filename with domains", metavar="FILE", required=True)
        subparser.set_defaults(func=self.delete)

        subparser = subparsers.add_parser('email', description='Add info@ as valid',
                                          help='Mark info@ as valid')
        subparser.add_argument('-f', '--file', help="Filename with domains", metavar="FILE", required=True)
        subparser.set_defaults(func=self.email)

        subparser = subparsers.add_parser('diff', description='Find diffs between ElasticSearch and Zonefile',
                                          help='Find diffs between ElasticSearch and Zonefile')
        subparser.add_argument('-f', '--file', help="Filename with domains", metavar="FILE", required=True)
        subparser.set_defaults(func=self.diff)

        self.args = parser.parse_args()

        setup_logging.setup(self.args.logfile, 2 if self.args.verbose else 1)

        self.config = dict()
        # print(self.args)
        if not self._load_config():
            if not (self.args.url and self.args.key and self.args.engine):
                parser.print_help(sys.stderr)
                sys.exit(1)
            else:
                self.url = self.args.url
                self.key = self.args.key
                self.engine = self.args.engine
        else:
            self.url = self.config['url']
            self.key = self.config['api']
            self.engine = self.config['engine']

        if not (self.url and self.key and self.engine):
            parser.print_help(sys.stderr)
            sys.exit(1)

        try:
            self.file = self.args.file
        except NameError:
            pass
        except AttributeError:
            pass
        self.args.func()

    def _load_config(self):
        if self.args.config:
            with open(self.args.config, 'rb') as configfile:
                self.config = yaml.load(configfile.read(), Loader=yaml.FullLoader)
                LOGGER.debug('Config loaded from: %s', self.args.config)
                return True

    def update(self):
        worker = Worker(self.url, self.engine, self.key)
        worker.update()
        LOGGER.info("All done")
        sleep(2)

    def new(self):
        worker = Worker(self.url, self.engine, self.key, self.file)
        worker.new()
        LOGGER.info("All done")
        sleep(2)

    def diff(self):
        worker = Worker(self.url, self.engine, self.key, self.file)
        worker.diff()
        LOGGER.info("All done")
        sleep(2)

    def delete(self):
        worker = Worker(self.url, self.engine, self.key, self.file)
        worker.delete()
        LOGGER.info("All done")
        sleep(2)

    def email(self):
        worker = Worker(self.url, self.engine, self.key, self.file)
        worker.email()
        LOGGER.info("All done")
        sleep(2)


def main():
    Cli()


if __name__ == '__main__':
    main()
