import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function ({ end, start, searchTerm, totalResults }) {
    const getPagingInfoText = () => {
        return `Results for ${searchTerm} / Showing ${start} - ${end} out of ${totalResults}`
    }

    return <>{searchTerm && <Typography color="textPrimary">{getPagingInfoText()}</Typography>}</>
}
