import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import API from './views/API'
import Impress from './views/Impress'
import Statistic from './views/Statistic'
import HeaderBar from './components/AppBar'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const outerTheme = createTheme({
    palette: {
        primary: {
            main: '#303F9F',
        },
        secondary: {
            light: '#FFC107',
            main: '#FF5252',
            contrastText: '#ffcc00',
        },
    },
})

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={outerTheme}>
                <CssBaseline />
                <HeaderBar></HeaderBar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/statistic" element={<Statistic />} />
                    <Route path="/api" element={<API />} />
                    <Route path="/impress" element={<Impress />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}
