import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from "./views/Home"
import API from "./views/API"
import Impress from "./views/Impress"
import Statistic from "./views/Statistic"
import HeaderBar from './components/StyledAppBar'

export default function App() {
  return (
    <BrowserRouter>
    <HeaderBar></HeaderBar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/statistic" element={<Statistic/>} />
        <Route path="/api" element={<API/>} />
        <Route path="/impress" element={<Impress/>} />
      </Routes>
    </BrowserRouter>
  );
}