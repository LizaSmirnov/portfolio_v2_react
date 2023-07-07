import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Nodemailer from 'nodemailer';

import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {

  useEffect(() => {
    //   we can make side effects inside here
  }, []);

  return (
    <>
    
     <Helmet>
     <html lang="en" data-theme="cupcake" />
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
