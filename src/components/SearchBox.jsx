import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Box from '@material-ui/core/Box'
import InputAdornment from '@material-ui/core/InputAdornment'
import { FormControl } from '@material-ui/core'
import { SearchBox } from '@elastic/react-search-ui'

const useStyles = makeStyles((theme) => ({
    box: {
        justifyContent: 'center',
        flexGrow: 1,
        marginBottom: '10px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: ' 3.2rem',
    },

    customFullWidth: {
        width: '100%',
    },
}))

export default function CustomizedInputBase() {
    const classes = useStyles()
    return (
        <Box display="flex" className={classes.box}>
            <Paper className={classes.paper}>
                <FormControl className={classes.customFullWidth}>
                    <SearchBox
                        view={({ onChange, value, onSubmit }) => (
                            <form onSubmit={onSubmit}>
                                <InputBase
                                    placeholder="Search .ch zonefile"
                                    value={value}
                                    onChange={(e) => onChange(e.currentTarget.value)}
                                    className={classes.customFullWidth}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onSubmit={onSubmit}
                                                type="submit"
                                                className={classes.iconButton}
                                                aria-label="search"
                                            >
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </form>
                        )}
                    />
                </FormControl>
            </Paper>
        </Box>
    )
}
