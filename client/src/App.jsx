import {Routes, Route, useLocation} from "react-router-dom"

import LandingPage from "../src/views/LandingPage/LandingPage"
import Home from "../src/views/Home/Home"
import Detail from "../src/views/Detail/Detail"
import Create from "./views/Create/Create"
import About from "../src/views/About/About"
import ErrorPage from "./views/ErrorPage/ErrorPage"

import NavBar from "./components/NavBar/NavBar"

import './App.css';

function App() {
  const location = useLocation()
  //Hacer use efecct para q apenas se levante ejecute action de getTemperaments
  return (

    <div className="App">
      {/* Mientras que la ruta sea diferente a "/" se debe mostrar la NavBar */}
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App;