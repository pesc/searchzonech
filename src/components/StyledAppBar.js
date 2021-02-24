import React from 'react';

import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Favorite, GitHub, Info, DeveloperMode, Equalizer, Home } from '@material-ui/icons';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function HeaderBar() {
    const classes = useStyles();
    let navigate = useNavigate()
    return (
        <React.Fragment>
            <CssBaseline />
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        .ch Search Engine
                    </Typography>
                        <IconButton onClick={() => navigate("/")} aria-label="Home" color="inherit">
                        <Home />
                    </IconButton>
                        <IconButton onClick={() => navigate("/statistic")} aria-label="Statistics" color="inherit">
                        <Equalizer />
                    </IconButton>
                        <IconButton onClick={() => navigate("/impress")} aria-label="About searchzone.ch" color="inherit">
                        <Info />
                    </IconButton>
                        <IconButton onClick={() => window.open('https://github.com/pesc/searchzonech', '_blank')} aria-label="Source Code" color="inherit">
                        <GitHub />
                    </IconButton>
                    <IconButton onClick={() => navigate("/api")} aria-label="API" color="inherit">
                        <DeveloperMode />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://www.buymeacoffee.com/pesc', '_blank')} aria-label="Support" color="secondary">
                        <Favorite />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
        </React.Fragment>
    );
}