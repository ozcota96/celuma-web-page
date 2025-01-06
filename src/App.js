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
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import SignUpSuccess from "./components/SignUpSuccess/SignUpSuccess";
import UserProfile from "./components/UserProfile/UserProfile";
import UserSecurity from "./components/UserSecurity/UserSecurity";
import Users from "./components/Users/Users";
import EditAccount from "./components/EditAccount/EditAccount";
import PasswordUpdate from "./components/PasswordUpdate/PasswordUpdate";

function App() {

  const apiUrl = process.env.REACT_APP_API_URL;
  //console.log('API URL:', apiUrl);
  //console.log('Mode:', process.env.REACT_APP_MODE);

  return (


    <AuthProvider>
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
                <Route path="/contact" element={<Contact/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/success" element={<SignUpSuccess/>} />
                <Route path="/profile" element={<UserProfile/>} />
                <Route path="/security" element={<UserSecurity/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/editAccount" element={<EditAccount/>} />
                <Route path="/PasswordUpdate" element={<PasswordUpdate/>} />
              </Routes>
            </div>
          </div>
          <Footer/>
          </>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;