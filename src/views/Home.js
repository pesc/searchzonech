import React, { useEffect } from 'react';
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { makeStyles } from '@material-ui/core/styles';
import SearchBoxMaterial from "../components/StyledSearchBox"
import ResultView from "../components/StyledResult"
import PagingView from "../components/StyledPaging"
import FacetView from "../components/StyledFacet"
import SortView from "../components/StyledSort"
import Grid from '@material-ui/core/Grid';
import {
    ErrorBoundary,
    Facet,
    SearchProvider,
    Results,
    PagingInfo,
    Paging,
    Sorting,
    WithSearch
} from "@elastic/react-search-ui";
import CssBaseline from '@material-ui/core/CssBaseline';
//import "@elastic/react-search-ui-views/lib/styles/styles.css";
import {
    buildAutocompleteQueryConfig,
    buildFacetConfigFromConfig,
    buildSearchOptionsFromConfig,
    buildSortOptionsFromConfig,
    getConfig,
    getFacetFields,
    getFacetFieldsNames
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
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12}>
                                            <SearchBoxMaterial />
                                            {isLoading && (
                                                <LinearProgress />
                                            )}
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
                                            <>
                                                <PagingInfo style={{ display: 'flex', justifyContent: 'flex-end' }} view={StyledPagingInfo} />
                                                <Sorting view={SortView}
                                                    label={"Sort by"}
                                                    sortOptions={buildSortOptionsFromConfig()}
                                                />
                                                {/* ToDo can be done much more elegant -> map key value */}
                                                {getFacetFields().map((field, index) => (
                                                    <Facet key={field} view={FacetView} field={field} label={getFacetFieldsNames()[index]} isFilterable={true} />
                                                ))}
                                            </>

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

                                        <Grid item xs={12} sm={12}>
                                            <Paging view={PagingView} />
                                        </Grid>
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