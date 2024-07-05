import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import BestSellers from "./components/BestSellers/BestSellers";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Quiz from "./components/Quiz/Quiz";
import Quotes from "./components/Quotes/Quotes";
import IndexContact from "./components/IndexContact/IndexContact";
import { CAROUSEL_IMAGES } from "./data";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <>
        <Navbar/>
        <div className="app-wrapper">
          <div className="container">
            <Routes>
              <Route path="/" element= {
                <>
                  <Carousel images={CAROUSEL_IMAGES}/>
                  <BestSellers/>
                  <Quiz/>
                  <Quotes/>
                  <div className="index-about-container">
                    <IndexContact/>
                    <FAQ/>
                  </div>
              </>
              }/>
              <Route path="/about" element={<About/>} />
              <Route path="/products" element={<Products/>} />
            </Routes>
          </div>
        </div>
        <Footer/>
        </>
      </div>
    </Router>
  );
}

export default App;