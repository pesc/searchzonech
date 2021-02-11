import React, { useEffect } from 'react';
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { makeStyles } from '@material-ui/core/styles';
import SearchBoxMaterial from "../components/StyledSearchBoxMaterial"
import ResultView from "../components/StyledResult"
//import PagingView from "../components/PagingView"
import FacetView from "../components/StyledFacet"
import SortView from "../components/StyledSort"
//import { Paging as PagingView } from "@elastic/react-search-ui-views";
import Grid from '@material-ui/core/Grid';
import {
    ErrorBoundary,
    Facet,
    SearchProvider,
    //SearchBox,
    Results,
    PagingInfo,
    //ResultsPerPage,
    //Paging,
    Sorting,
    WithSearch
} from "@elastic/react-search-ui";
import CssBaseline from '@material-ui/core/CssBaseline';
//  import "@elastic/react-search-ui-views/lib/styles/styles.css";
import {
    buildAutocompleteQueryConfig,
    buildFacetConfigFromConfig,
    buildSearchOptionsFromConfig,
    buildSortOptionsFromConfig,
    getConfig,
    getFacetFields
} from "../config/config-helper";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Divider } from "@material-ui/core";
import StyledPagingInfo from "../components/StyledPagingInfo";
const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
const connector = new AppSearchAPIConnector({
    searchKey,
    engineName,
    hostIdentifier,
    endpointBase
});
const config = {
    searchQuery: {
        facets: buildFacetConfigFromConfig(),
        ...buildSearchOptionsFromConfig()
    },
    autocompleteQuery: buildAutocompleteQueryConfig(),
    apiConnector: connector,
    alwaysSearchOnInitialLoad: true,
    initialState: {
        resultsPerPage: 10
    }
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    ul: {
        padding: 0,
        marginTop: 0,
        listStyleType: "none",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function SetTitle(searchTerm) {
    useEffect(() => {
        if (!searchTerm) {
            document.title = 'Searchzone.ch';
        }
        else {
            document.title = `${searchTerm} - Searchzone.ch`;
        }
    });
}

export default function Home() {
    const classes = useStyles();
    // useEffect((searchTerm) => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${searchTerm} times`;
    // });
    return (
        <React.Fragment>
            <CssBaseline />
            <SearchProvider config={config}>
                <WithSearch mapContextToProps={({ wasSearched, isLoading, searchTerm }) => ({ wasSearched, isLoading, searchTerm })}>
                    {({ wasSearched, isLoading, searchTerm }) => {
                        SetTitle(searchTerm)
                        return (
                            <div className="App" style={{ padding: 20 }} >
                                <ErrorBoundary>
                                    {/* <Grid container spacing={3}>
                                        <Grid item xs={12} sm={12}>
                                            <Paper className={classes.paper}>xs=12</Paper>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={5} xl={3}>
                                            <Paper className={classes.paper}>xs=6</Paper>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={8} lg={7} xl={9}>
                                            <Paper className={classes.paper}>xs=6</Paper>
                                    </Grid> */}
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12}>
                                            {/* //<SearchBox autocompleteSuggestions={true} searchAsYouType={false} autocompleteMinimumCharacters={3} />
                                            //<CustomizedInputBase></CustomizedInputBase>

                                            // <SearchBox 
                                            //     autocompleteSuggestions={true}
                                            //     inputView={({ getAutocomplete, getInputProps, getButtonProps }) => (
                                            //         <>
                                            //             <SearchBar
                                            //                 onRequestSearch={() => console.log('onRequestSearch')}
                                            //                 style={{
                                            //                     margin: '0 auto',
                                            //                     maxWidth: 800
                                            //                 }}
                                            //             />
                                            //             {getAutocomplete()}
                                            //         </>
                                            //     )}
                                            // />
                                            // <SearchBox
                                            //     autocompleteView={({ autocompletedResults, getItemProps }) => (
                                            //         <div className="sui-search-box__autocomplete-container">
                                            //             {autocompletedResults.map((result, i) => ( 
                                            //                 <div
                                            //                     {...getItemProps({
                                            //                         key: result.id.raw,
                                            //                         item: result
                                            //                     })}
                                            //                 >
                                            //                     Result {i}: {result.title.snippet} 
                                            //                 </div>
                                            //             ))}
                                            //         </div>
                                            //     )}
                                            // />
                                            // <SearchBox
                                            //     autocompleteSuggestions={true}
                                            //     inputView={({ getAutocomplete, getInputProps, getButtonProps }) => (
                                            //         <>
                                            //         <div className="sui-search-box__wrapper">
                                            //                 <Input {...getInputProps({ placeholder: 'Search games' })} />
                                            //             {getAutocomplete()}
                                            //         </div>
                                            //         <button {...getButtonProps()}>
                                            //             <svg viewBox="0 0 250 250" width="20" height="20" role="img">
                                            //             <title>Search</title>
                                            //             <path d="M244.186 214.604l-54.379-54.378c-.289-.289-.628-.491-.93-.76 10.7-16.231 16.945-35.66 16.945-56.554C205.822 46.075 159.747 0 102.911 0S0 46.075 0 102.911c0 56.835 46.074 102.911 102.91 102.911 20.895 0 40.323-6.245 56.554-16.945.269.301.47.64.759.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.275-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z" />
                                            //             </svg>
                                            //         </button>
                                            //         </>
                                            //     )}
                                            //     />*/}
                                            <SearchBoxMaterial />
                                            {/* <Divider /> */}

                                            {isLoading && (
                                                <LinearProgress />
                                            )}
                                        </Grid>
                                        {/* <Grid item xs={12} sm={12}>
                                            {searchTerm && wasSearched && (
                                                <>
                                                    <PagingInfo style={{ display: 'flex', justifyContent: 'flex-end' }}
                                                        view={({ start, end, searchTerm, totalResults }) => (
                                                            <Breadcrumbs aria-label="breadcrumb">
                                                                <Typography color="textPrimary">{"Results for " + searchTerm}</Typography>
                                                                <Typography color="textPrimary">{totalResults}</Typography>
                                                            </Breadcrumbs>
                                                        )}
                                                    />
                                                    <Sorting view={SortView}
                                                        label={"Sort by"}
                                                        sortOptions={buildSortOptionsFromConfig()}
                                                    />
                                                </>
                                            )}
                                        </Grid> */}
                                        {/* // <SearchBox
                                            // autocompleteSuggestions={true}
                                            // inputView={({ getAutocomplete, getInputProps, getButtonProps }) => (
                                            //     <>
                                            //         <Autocomplete
                                            //             id="free-solo-demo"
                                            //             freeSolo
                                            //             options={getAutocomplete()}
                                            //             renderInput={(getInputProps) => (
                                            //                 <TextField {...getInputProps} label="freeSolo" margin="normal" variant="outlined" />
                                            //             )}
                                            //         />
                                            //         <TextField {...getInputProps({ placeholder: 'Search games' })} label="freeSolo" margin="normal" variant="outlined" />
                                            //     </>
                                            // )}
                                            // /> */}
                                        {/* <Grid item xs={12}>
                                            <React.Fragment>
                                                {wasSearched && <PagingInfo />}
                                                {wasSearched && <ResultsPerPage options={[5, 10, 15]} />}
                                            </React.Fragment>
                                        </Grid> */}
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
                                            {searchTerm && wasSearched && (
                                                <PagingInfo style={{ display: 'flex', justifyContent: 'flex-end' }} view={StyledPagingInfo} />
                                                /*{ <Sorting view={SortView}
                                                    label={"Sort by"}
                                                    sortOptions={buildSortOptionsFromConfig()}
                                                /> }*/

                                            )}
                                            {getFacetFields().map(field => (
                                                <Facet key={field} view={FacetView} field={field} label={field} isFilterable={true} />
                                            ))}

                                        </Grid>
                                        <Grid item md={1} lg={1} xl={1}>
                                            <Divider orientation='vertical' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={8}>
                                            <>
                                                {wasSearched && (
                                                    <Results className={classes.ul} resultView={ResultView} />
                                                )}
                                            </>
                                        </Grid>

                                        {/* <Grid item xs={12} sm={12}>
                                            <Paging view={PagingView} />
                                            {/* <Paging
                                                    view={({ totalPages, onChange, current, page}) => (
                                                        <div className="paging-info">
                                                            <Pagination count={totalPages} color="primary" onChange={onChange} />
                                                        </div>

                                                    )}
                                                /> }
                                            <Paging
                                                view={props =>
                                                    PagingView({
                                                        ...props,
                                                        onChange: page => {
                                                            reportChange(page);
                                                            return props.onChange(page);
                                                        }
                                                    })
                                                }
                                            />

                                        </Grid> */}
                                    </Grid>
                                </ErrorBoundary>
                            </div>
                        );
                    }}
                </WithSearch>
            </SearchProvider>
        </React.Fragment>
    );
}