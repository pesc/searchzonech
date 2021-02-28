import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./views/Home"
import API from "./views/API"
import Impress from "./views/Impress"
import Statistic from "./views/Statistic"
import HeaderBar from './components/StyledAppBar'
import MUICookieConsent from 'material-ui-cookie-consent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#303F9F',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#FFC107',
      main: '#FF5252',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
});


export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={outerTheme}>
        <HeaderBar></HeaderBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/api" element={<API />} />
          <Route path="/impress" element={<Impress />} />
        </Routes>
        <MUICookieConsent
          cookieName="searchzoneCookieConsent"
          cookieValue="true"
          message="This website uses cookies to enhance the user experience."
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}