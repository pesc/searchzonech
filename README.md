# .ch-searchzone

Search the .ch zone file for DNS Records: https://searchzone.ch/

## Infrastructure
It's an elastic-based search engine ([AppSearch](https://www.elastic.co/app-search/) & [Elasticsearch](https://www.elastic.co/elasticsearch/)) running on Docker in the [Hetzner Cloud](https://www.hetzner.com/cloud).
```
                                         +---------------------------------------------+                            
                                         |      Elastic & EnterpriseSearch Cluster     |                            
                                         |                                             |                            
                                         | +---------------------+                     |                            
                                         | |                     |                     |                            
+------------------------+               | |searchzone-elastic-01|                     |                            
|      Loadbalancer      |---------------| |                     |                     |                            
|                        |               | +---------------------+                     |                            
|                        |               | +---------------------+                     |                            
|    api.searchzone.ch   |---------------| |                     |                     |                            
|                        |               | |searchzone-elastic-02|                     |                            
|                        |               | |                     |                     |                            
|                        |               | +---------------------+                     |                            
|                        |---------------| +---------------------+                     |                            
+------------------------+               | |                     |                     |                            
                                         | |searchzone-elastic-03|                     |                            
                                         | |                     |                     |                            
                                         | +---------------------+                     |                            
                                         |                                             |                            
                                         |                                             |                            
                                         |                                             |                            
                                         +---------------------------------------------+       
```
### Updates and Deletion
The newly added domains get indexed once a day. The deleted ones I only mark as removed (`VALID_DOMAIN = False`). So maybe you'll find a nice domain you wanted to buy with this flag.

## Data Source
The data I use is public available from [Switch.ch](https://www.switch.ch/de/open-data/#tab-c5442a19-67cf-11e8-9cf6-5254009dc73c-3) as part of their OpenData publication for combating cybercrime, scientific and social research or for other purposes in the public interest.

## Next steps
1. Release source code for indexing (Python)
2. ~~Release source code for React App~~
3. Make Elastic more robust and faster
4. Design, Design, Design,...
5. Open API
6. Open for changes (Some ideas: Better DNSSEC Overview, Notification for a deleted domain, ...)

## Usage


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[Apache License 2.0](https://github.com/pesc/.ch-searchzone/blob/main/LICENSE)
