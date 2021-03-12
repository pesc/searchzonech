import React, { useEffect } from 'react'
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector'
import {
    ErrorBoundary,
    Facet,
    SearchProvider,
    Results,
    PagingInfo,
    Paging,
    Sorting,
    WithSearch,
} from '@elastic/react-search-ui'

import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import LinearProgress from '@material-ui/core/LinearProgress'
import Divider from '@material-ui/core/Divider'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import SearchBoxMaterial from '../components/SearchBox'
import ResultView from '../components/Result'
import PagingView from '../components/Paging'
import FacetView from '../components/Facet'
import SortView from '../components/Sort'
import StyledPagingInfo from '../components/PagingInfo'

import {
    buildAutocompleteQueryConfig,
    buildFacetConfigFromConfig,
    buildSearchOptionsFromConfig,
    buildSortOptionsFromConfig,
    getConfig,
    getFacetFields,
    getFacetFieldsNames,
} from '../config/config-helper'

const useStyles = makeStyles((theme) => ({
    pagination: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}))

export default function ({ index, label, onMoreClick, onRemove, onSelect, options, showMore, onSearch, field }) {
     const classes = useStyles()
    return (
<Accordion key={index}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={index}>
        <Typography className={classes.heading}>{`${getFacetFieldsNames()[index]} Filters`}</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Facet
            className="facetSelect"
            key={field}
            view={FacetView}
            field={field}
            label={getFacetFieldsNames()[index]}
            isFilterable={true}
        />
    </AccordionDetails>
</Accordion>
    )}
