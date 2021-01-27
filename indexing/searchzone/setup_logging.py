import logging
import logging.handlers
import sys


def setup(filename, level):
    root_logger = logging.getLogger()
    root_logger.setLevel(logging.DEBUG)

    formatter = logging.Formatter('%(asctime)s [%(levelname)s] %(name)s: %(message)s')

    logfile = logging.handlers.RotatingFileHandler(filename, maxBytes=10485760, backupCount=20, encoding='utf-8')
    logfile.setFormatter(formatter)
    logfile.setLevel(logging.INFO)

    console = logging.StreamHandler(stream=sys.stdout)
    console.setFormatter(formatter)

    if level >= 2:
        console.setLevel(logging.DEBUG)
    elif level == 1:
        console.setLevel(logging.INFO)
    elif level == 0:
        console.setLevel(logging.WARN)

    root_logger.addHandler(logfile)
    root_logger.addHandler(console)
