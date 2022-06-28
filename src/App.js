import Navbar from "./component/navbar/Navbar";
// import VideoCurseol from './VideoCurseol';
// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoCurseol from "./component/videoComponent/VideoSlider";
import FeaturedToday from "./component/featuredToday/FeaturedToday";
import Movies from "./component/movies/Movies";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <VideoCurseol/> */}
      <FeaturedToday />
      <Movies />
    </div>
  );
}

export default App;
