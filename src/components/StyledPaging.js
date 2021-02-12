import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    pagination: {
        justifyContent: "center",
        flexGrow: 1,
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));
export default function PagingView({
    className,
    current,
    onChange,
    totalPages,
}) {
    const classes = useStyles();
    return (
        <Pagination className={classes.pagination} count={totalPages} page={current} onChange={(event, val) => onChange(val)} color="primary"/>
    );
}
