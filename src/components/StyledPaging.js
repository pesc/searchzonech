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
        <Fragment>
            <Hidden only={['md', 'sm', 'xs']}>
                <Pagination color="primary" size="large" boundaryCount={1} className={classes.pagination} count={totalPages} page={current} onChange={(event, val) => onChange(val)} />
            </Hidden>
            <Hidden only={['lg', 'xl']}>
                <Pagination color="primary" size="small" boundaryCount={1} className={classes.pagination} count={totalPages} page={current} onChange={(event, val) => onChange(val)} />
            </Hidden>
        </Fragment>
    );
}
