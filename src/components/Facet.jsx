import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'

const StyledCard = withStyles({
    root: {
        marginBottom: '10px',
        paddingBottom: '5px',
        width: '100%',
    },
})(Card)

const StyledListItemIcon = withStyles({
    root: {
        minWidth: '0px',
        fontSize: '0.5rem',
    },
})(ListItemIcon)

const StyledCardHeader = withStyles({
    root: {
        minWidth: '0px',
        fontSize: '0.5rem',
        padding: '0px',
    },
})(CardHeader)

const StyledListItem = withStyles({
    root: {
        width: '100%',
        minWidth: '100%',
        display: 'block',
    },
})(ListItem)

export function getFilterValueDisplay(filterValue) {
    if (filterValue === undefined || filterValue === null) return ''
    if (filterValue.hasOwnProperty('name')) return filterValue.name
    return String(filterValue)
}

export default function ({ className, label, onMoreClick, onRemove, onSelect, options, showMore, onSearch }) {
    return (
        <>
                        {/* <TextField
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                            size="small"
                            id="standard-search"
                            label={label + ' Filter'}
                            type="search"
                            onChange={(e) => {
                                onSearch(e.target.value)
                            }}
                        ></TextField> */}
                        
                <List>
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
                </List>
                </>
            // {showMore && (
            //     <>
            //         <Divider />
            //         <CardActions>
            //             <Button color="primary" type="button" onClick={onMoreClick}>
            //                 More
            //             </Button>
            //         </CardActions>
            //     </>
            // )}
    )
}
