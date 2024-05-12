import "./App.css"
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import { CAROUSEL_IMAGES } from "./data";

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <div className="container">
        <Carousel images={CAROUSEL_IMAGES}/>
      </div>
      </>
    </div>
  );
}

export default App;
