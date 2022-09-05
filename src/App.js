import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarSection from 'components/Navbar';
import Home from 'pages/Home';
import Market from 'pages/Market';
import MarketInvest from 'pages/MarketInvest';
import SecondaryMarket from 'pages/SecondaryMarket';
import Community from 'pages/Community';
import IndividualListing from 'pages/IndividualListing';
import Footer from 'components/Footer';





function App() {
  return (
    <>   
        <NavbarSection/>
        <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route to='/market' >
              <Route path='/marketInvest' element={<MarketInvest/>} />
              <Route path='/secondaryMarket' element={<SecondaryMarket/>} />
            </Route>
            <Route path='/community' element={<Community/>} /> 
            <Route path='/individualListing' element={<IndividualListing/>} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
