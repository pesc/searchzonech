import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Divider from '@material-ui/core/Divider'
import Checkbox from '@material-ui/core/Checkbox'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionActions from '@material-ui/core/AccordionActions'
import TextField from '@material-ui/core/TextField'

import { getFacetFieldsNames } from '../config/config-helper'

const StyledList = withStyles({
    root: {
        width: '100%',
    },
})(List)

const StyledListItemIcon = withStyles({
    root: {
        fontSize: '0.5rem',
    },
})(ListItemIcon)

const StyledListItem = withStyles({
    root: {
        width: '100%',
        minWidth: '100%',
    },
})(ListItem)

export function getFilterValueDisplay(filterValue) {
    if (filterValue === undefined || filterValue === null) return ''
    if (filterValue.hasOwnProperty('name')) return filterValue.name
    return String(filterValue)
}

export default function ({ label, onMoreClick, onRemove, onSelect, onSearch, options, showMore, index }) {
    return (
        <>
            <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={index}>
                    <Typography>{`${getFacetFieldsNames()[index]} Filters`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledList>
                        {options.length < 1 && <div>No matching options</div>}
                        {options.map((option) => {
                            const checked = option.selected
                            return (
                                <StyledListItem
                                    divider
                                    button
                                    key={getFilterValueDisplay(option.value)}
                                    onClick={() => (checked ? onRemove(option.value) : onSelect(option.value))}
                                >
                                    <StyledListItemIcon>
                                        <Checkbox
                                            size="small"
                                            color="primary"
                                            id={`facet_${label}${getFilterValueDisplay(option.value)}`}
                                            checked={checked}
                                        />
                                    </StyledListItemIcon>
                                    <ListItemText multiline="true" secondary={getFilterValueDisplay(option.value)} />
                                    <ListItemText
                                        inset
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                        }}
                                        secondary={option.count.toLocaleString('en')}
                                    />
                                </StyledListItem>
                            )
                        })}
                    </StyledList>
                </AccordionDetails>

                <>
                    <Divider></Divider>
                    <AccordionActions>
                        <TextField
                            size="small"
                            id="standard-search"
                            label={label + ' Filter'}
                            type="search"
                            onChange={(e) => {
                                onSearch(e.target.value)
                            }}
                        ></TextField>
                        {showMore && (
                            <Button color="primary" type="button" onClick={onMoreClick}>
                                More
                            </Button>
                        )}
                    </AccordionActions>
                </>
            </Accordion>
        </>
    )
}
