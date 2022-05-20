import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/Home.js"
import GetDetail from './component/GetDetail';
import CreateMovieDetail from "./component/CreateMovieDetail.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movie/get' element={<GetDetail />} />
        <Route exact path='/movie' element={<CreateMovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
