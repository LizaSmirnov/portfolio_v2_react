import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
// import Nodemailer from 'nodemailer';

import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { ThemeContext } from "./ThemeProvider";

const App = () => {
const {theme} = useContext(ThemeContext);  

  return (
    <>
     <Helmet>
     <html lang="en" data-theme={theme} />
   </Helmet>
    <Navbar />
    <AboutMe />
    <Portfolio />
    <Contact />
    <Footer />

 </>
  );
};

export default App;
