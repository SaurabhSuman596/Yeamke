import "./App.css";
import Header from "./Components/Header/Header";
import Homescreen from "./Pages/Homescreen/Homescreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoScreen from "./Components/VideoScreen/VideoScreen";
import SearchVideoScreen from "./Components/searchVieo/SearchVideoScreen";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homescreen />} />

          <Route exact path="/video/:id" element={<VideoScreen />} />

          <Route exact path="/search/:id" element={<SearchVideoScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
