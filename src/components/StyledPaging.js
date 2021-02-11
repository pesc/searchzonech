import React from 'react';

import PropTypes from "prop-types";
import RCPagination from "rc-pagination";
import enUsLocale from "rc-pagination/lib/locale/en_US";

//import { appendClassName } from "./view-helpers";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

// export function setCurrent(current) {
//     // eslint-disable-next-line no-console
//     if (this.debug) console.log("Search UI: Action", "setCurrent", ...arguments);

//     this._updateSearchResults({
//         current
//     });
// }

const useStyles = makeStyles((theme) => ({
    pagination: {
        justifyContent: "center",
        flexGrow: 1,
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));
function PagingView({
    className,
    current,
    resultsPerPage,
    onChange,
    totalPages,
    ...rest
}) {
    const [page, setPage] = React.useState(1);
    current = page
    const classes = useStyles();
    return (
        <Pagination className={classes.pagination} page={page} current={page} count={totalPages} onChange={onChange} color="primary">
            {/* <RCPagination
            //current={page}
            //onChange={onChange}
            onChange={onChange}
            pageSize={resultsPerPage}
            total={totalPages * resultsPerPage}
            //className={appendClassName("sui-paging", className)}
            locale={enUsLocale}
            {...rest}
        /> */}
        </Pagination>
    );
}

PagingView.propTypes = {
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    resultsPerPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    className: PropTypes.string
};

export default PagingView;