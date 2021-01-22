import React from "react";

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import PacmanLoader from "react-spinners/ScaleLoader";
import CookieConsent from "react-cookie-consent";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import './App.css';

import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  buildSortOptionsFromConfig,
  getConfig,
  getFacetFields
} from "./config/config-helper";

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
const connector = new AppSearchAPIConnector({
  searchKey,
  engineName,
  hostIdentifier,
  endpointBase,
  cacheResponses: true
});
const config = {
  searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig(),
    /*filters: [
      { field: "domain", values: ["pascalchristen.ch"], type: "any" }
    ]*/
  },
  initialState: {
    resultsPerPage: 5
  },
  autocompleteQuery: buildAutocompleteQueryConfig(),
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true
};

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/useapi">
            <API />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
function Home() {
  return (
    <SearchProvider config={config} >
      <WithSearch mapContextToProps={({ wasSearched, isLoading }) => ({ wasSearched, isLoading })}>
        {({ wasSearched, isLoading }) => {
          return (
            <div className="App">   
              <ErrorBoundary>
                <Layout
                  header={<SearchBox autocompleteSuggestions={true} searchAsYouType={false} autocompleteMinimumCharacters={3} />}
                  sideContent={
                    <div>
                      {!isLoading && wasSearched && (
                        <Sorting
                          label={"Sort by"}
                          sortOptions={buildSortOptionsFromConfig()}
                        />
                      )}
                      {getFacetFields().map(field => (
                        <Facet key={field} field={field} label={field} isFilterable={true} />
                      ))}
                    </div>
                  }
                  bodyContent={
                    <div>
                    {isLoading && (
                        <PacmanLoader size={100} color="blue" />
                    )}
                    {wasSearched && (
                      <Results
                        titleField={getConfig().titleField}
                        urlField={getConfig().urlField}
                        shouldTrackClickThrough={true}
                      />
                    )}
                    </div>
                  }
                  bodyHeader={
                    <React.Fragment>
                      {wasSearched && <PagingInfo />}
                      {wasSearched && <ResultsPerPage options={[5, 10, 15]} />}
                    </React.Fragment>
                  }
                  bodyFooter={<Paging />}
                />
              </ErrorBoundary>
            </div>
          );
        }}
      </WithSearch>
      <CookieConsent location="bottom">This website uses cookies to enhance the user experience.</CookieConsent>
      <Footer>
        <span>© <a href="https://pascalchristen.ch"> Pascal Christen</a>, {new Date().getFullYear()}</span>
        <span> | </span>
        <span><a href="/about.html">About</a></span>
        <span> | </span>
        <span><a href="/useapi.html">API</a></span>
        <span> | </span>
        <span><a href="https://github.com/pesc/.ch-searchzone">Github</a></span>
        <span> | </span>
        <span><a href="https://www.buymeacoffee.com/pesc"><span role="img" aria-label="beer">🍺</span><span role="img" aria-label="love">❤️</span></a></span>
      </Footer>
    </SearchProvider>
  );
}

function API() {
  return <h2>API</h2>
}

function About() {
  return <h2>About</h2>
}
function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}
      </div>
    </div>
  )
}

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

