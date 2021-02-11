import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import InputAdornment from "@material-ui/core/InputAdornment";
import {
    SearchBox,
} from "@elastic/react-search-ui";
import { FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        justifyContent: "center",
        width: "100%",
    },
    paper: {
        margin: '30px',
        padding: '4px 4px',
        display: 'flex',
        width: "80%",
    },
    form: {
        width: "100%",
    },
    input: {
        width: "100%",
        marginLeft: "10px",
    },
    iconButton: {
        padding: 10,
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    return (
        <Box display="flex" className={classes.box}>
            <Paper className={classes.paper}>
                <FormControl style={{ minWidth: "100%", width: "100%" }}>
                    <SearchBox style={{ minWidth: "100%", width: "100%" }}
                        inputView={({ getInputProps, getButtonProps }) => (
                            <>
                                <InputBase className={classes.input} style={{ minWidth: "100%", width: "100%", marginLeft: "10px", }} autoFocus {...getInputProps({ placeholder: 'Search .ch zonefile' })}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton {...getButtonProps()} type="submit" className={classes.iconButton} aria-label="search" >
                                                <SearchIcon />
                                            </IconButton>
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