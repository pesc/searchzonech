import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    pagination: {
        justifyContent: "flex-end",
        alignItems: "center",
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
        <Pagination color="primary" size="large" boundaryCount={1} className={classes.pagination} count={totalPages} page={current} onChange={(event, val) => onChange(val)} />
    );
}
