import "./App.css"
import BestSellers from "./components/BestSellers/BestSellers";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Quiz from "./components/Quiz/Quiz";
import { CAROUSEL_IMAGES } from "./data";

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
        </div>
      </div>

      </>
    </div>
  );
}

export default App;
