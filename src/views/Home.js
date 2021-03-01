import React, { useEffect } from 'react';
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchBoxMaterial from "../components/StyledSearchBox"
import ResultView from "../components/StyledResult"
import PagingView from "../components/StyledPaging"
import FacetView from "../components/StyledFacet"
import SortView from "../components/StyledSort"
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
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
        resultsPerPage: 5
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
    loaderMargin: {
        marginLeft: '7%',
        marginRight: '7%'
    },
    loaderMarginSmall: {
        marginLeft: '13%',
        marginRight: '13%'
    }
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
                                    <Grid className="outerGrid" container spacing={2}>
                                        <Grid className="searchGrid" item xs={12} sm={12}>
                                            <SearchBoxMaterial className="searchBox" />
                                            <Hidden only={["md", "sm", "xs"]}>
                                                {isLoading && (
                                                    <LinearProgress className={classes.loaderMargin} />
                                                )}
                                            </Hidden>
                                            <Hidden only={["xl", "lg"]}>
                                                {isLoading && (
                                                    <LinearProgress className={classes.loaderMarginSmall} />
                                                )}
                                            </Hidden>
                                        </Grid>
                                        <Grid className="navGrid" item xs={12} sm={12} md={4} lg={4} xl={3}>
                                            <>
                                                <PagingInfo className="pagingInfo" style={{ display: 'flex', justifyContent: 'flex-end', }} view={StyledPagingInfo} />
                                                <Sorting className="sortingSelect" view={SortView}
                                                    label={"Sort by"}
                                                    sortOptions={buildSortOptionsFromConfig()}
                                                />
                                                {/* ToDo can be done much more elegant -> map key value */}
                                                {getFacetFields().map((field, index) => (
                                                    <React.Fragment>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel1a-content"
                                                                id={index}
                                                            >
                                                                <Typography className={classes.heading}>{`${getFacetFieldsNames()[index]} Filters`}</Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Facet className="facetSelect" key={field} view={FacetView} field={field} label={getFacetFieldsNames()[index]} isFilterable={true} />
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </React.Fragment>
                                                ))}
                                            </>

                                        </Grid>
                                        <Grid className="dividerGrid" item md={1} lg={1} xl={1}>
                                            <Divider className="verticalDevider" orientation='vertical' />
                                        </Grid>
                                            <Grid className="resultGrid" item xs={12} sm={12} md={6} lg={6} xl={8}>
                                                <Grid container
                                                    direction="row"
                                                    justify="center"
                                                    alignItems="center">
                                                    <Grid item>
                                                        {wasSearched && (
                                                            <Results className={classes.ul} resultView={ResultView} />
                                                        )}
                                                    </Grid>
                                                    <Grid itemclassName="pagingGrid" item>
                                                        <Paging className="pagingSelect" view={PagingView} />
                                                    </Grid>
                                                </Grid>
                                                <Grid>
                                                </Grid>
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