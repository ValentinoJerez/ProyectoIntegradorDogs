import {Routes, Route, useLocation} from "react-router-dom"

import LandingPage from "../src/views/LandingPage/LandingPage"
import Home from "../src/views/Home/Home"
import About from "../src/views/About/About"

import './App.css';

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </div>
  )
}

export default App;