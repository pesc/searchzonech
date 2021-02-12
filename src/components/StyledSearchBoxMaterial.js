import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import InputAdornment from "@material-ui/core/InputAdornment";
import { FormControl } from '@material-ui/core';
import {
    SearchBox,
} from "@elastic/react-search-ui";


const useStyles = makeStyles((theme) => ({
    box: {
        justifyContent: "center",
        flexGrow: 1,
        marginBottom: "10px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    return (
        <Box display="flex" className={classes.box}>
            <Paper className={classes.paper}>
                <FormControl>
                    <SearchBox
                        inputView={({ getAutocomplete, getInputProps, getButtonProps }) => (
                            <>
                                <InputBase className={classes.input} autoFocus {...getInputProps({ placeholder: 'Search .ch zonefile' })}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton {...getButtonProps()} type="submit" className={classes.iconButton} aria-label="search" >
                                                <SearchIcon />
                                            </IconButton>
                                            {getAutocomplete()}
                                        </InputAdornment>}
                                    
                                />

                            </>
                        )}
                    />
                </FormControl>
            </Paper>
        </Box>

    );
}