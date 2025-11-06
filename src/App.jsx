import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from "./pages/Books.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
function AppContent() {

}
function App() {
    return (


    <BrowserRouter>
        <Header />
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/buscar" element={<Buscar />} />
        </Routes>
        <Footer />
    </BrowserRouter>


    );
}

export default App
