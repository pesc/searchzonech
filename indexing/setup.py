from setuptools import setup

setup(
    name='searchzone',
    version='0.1',
    packages=['searchzone', 'searchzone.tasks', 'searchzone.elastic'],
    url='https://searchzone.ch',
    license='',
    author='Pascal Christen',
    author_email='pascal@pascalchristen.ch',
    description='.ch Searchzone Indexer',
    entry_points = {
    'console_scripts': [
        'searchzoni = searchzone.cli:main',
    ],
    }
)
