import Navbar from './component/navbar/Navbar';
// import VideoCurseol from './VideoCurseol';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoCurseol from './component/videoComponent/VideoSlider';
function App() {
  return (
    <div >
      <Navbar/>
      <VideoCurseol/>
    </div>
  );
}

export default App;
