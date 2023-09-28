import {Routes, Route, useLocation} from "react-router-dom"

import LandingPage from "../src/views/LandingPage/LandingPage"
import Home from "../src/views/Home/Home"
import About from "../src/views/About/About"
import Detail from "../src/views/Detail/Detail"

import NavBar from "./components/NavBar/NavBar"

import './App.css';

function App() {
  const location = useLocation()

  //Search
  async function search(name){
    try {
        const response = await fetch(`/api/getDogsByName?name=${name}`);
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error('Error al buscar perros:', error);
      }
}


  return (
    <div className="App">
      {/* Mientras que la ruta sea diferente a "/" se debe mostrar la NavBar */}
      {location.pathname !== "/" && <NavBar onSearch={search}/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Detail" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App;