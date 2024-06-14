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

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <div className="app-wrapper">
        <div className="container">
          <Carousel images={CAROUSEL_IMAGES}/>
          <BestSellers/>
          <Quiz/>
          <Quotes/>
          <div className="index-about-container">
            <IndexContact/>
            <FAQ/>
          </div>
          
        </div>
      </div>
      <Footer/>
      </>
    </div>
  );
}

export default App;
