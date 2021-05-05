import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionActions from '@material-ui/core/AccordionActions'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'

import { getFacetFieldsNames } from '../config/config-helper'

const useStyles = makeStyles((theme) => ({
    pagination: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}))

export default function ({ index, onMoreClick, showMore }) {
    const classes = useStyles()
    return (
        <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={index}>
                <Typography className={classes.heading}>{`${getFacetFieldsNames()[index]} Filters`}</Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
            {showMore && (
                <>
                    <Divider />

                    <AccordionActions>
                        <Button color="primary" type="button" onClick={onMoreClick}>
                            More
                        </Button>
                    </AccordionActions>
                </>
            )}
        </Accordion>
    )
}
