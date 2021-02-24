import React from 'react';

import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Favorite, GitHub, Info, DeveloperMode, Equalizer, Home } from '@material-ui/icons';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'wrap',
    },
    toolbar: {
        flexWrap: 'wrap',
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
            <AppBar position="relative" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" className={classes.title} >
                                .ch Search Engine
                        </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Hidden only={["md", "sm", "xs"]}>
                                <Grid container
                                    direction="row"
                                    justify="flex-end"
                                    alignItems="center">
                                    <Grid item>
                                        <IconButton onClick={() => navigate("/")} aria-label="Home" color="inherit">
                                            <Home fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => navigate("/statistic")} aria-label="Statistics" color="inherit">
                                            <Equalizer fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => navigate("/impress")} aria-label="About searchzone.ch" color="inherit">
                                            <Info fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => window.open('https://github.com/pesc/searchzonech', '_blank')} aria-label="Source Code" color="inherit">
                                            <GitHub fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => navigate("/api")} aria-label="API" color="inherit">
                                            <DeveloperMode fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => window.open('https://www.buymeacoffee.com/pesc', '_blank')} aria-label="Support" color="secondary">
                                            <Favorite fontSize='small' />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Hidden>
                            <Hidden only={["xl", "lg"]}>
                                <Grid container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center">
                                    <Grid item>
                                        <IconButton onClick={() => navigate("/")} aria-label="Home" color="inherit">
                                            <Home fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => navigate("/statistic")} aria-label="Statistics" color="inherit">
                                            <Equalizer fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => navigate("/impress")} aria-label="About searchzone.ch" color="inherit">
                                            <Info fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => window.open('https://github.com/pesc/.ch-searchzone', '_blank')} aria-label="Source Code" color="inherit">
                                            <GitHub fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => navigate("/api")} aria-label="API" color="inherit">
                                            <DeveloperMode fontSize='small' />
                                        </IconButton>
                                        <IconButton onClick={() => window.open('https://www.buymeacoffee.com/pesc', '_blank')} aria-label="Support" color="secondary">
                                            <Favorite fontSize='small' />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}