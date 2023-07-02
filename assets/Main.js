import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from './pages/Page2';
import './styles/app.css'
     
function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<Home/>} />
                <Route path="/page1"  element={<Page1/>} />
                <Route path="/page2"  element={<Page2/>} />
                <Route path="*" element={<Home/>} />
            </Routes>
        </Router>
    );
}
     
export default Main;
     
if (document.getElementById('app')) {
    const rootElement = document.getElementById("app");
    const root = createRoot(rootElement);
 
    root.render(
        <StrictMode>
            <Main />
        </StrictMode>
    );
}
