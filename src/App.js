import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";

import Series from "./Pages/Series/Series";

import Search from "./Pages/Search/Search";

import Container from "@mui/material/Container";
import Navbar from "./component/navbar/Navbar";
import Trending from "./Pages/Trending/Trending";
import Movies from "./component/movies/Movies";
import SimpleBottomNavigation from "./component/MainNav";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Movies />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
