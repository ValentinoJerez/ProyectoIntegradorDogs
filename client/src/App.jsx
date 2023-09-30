import {Routes, Route, useLocation} from "react-router-dom"

import LandingPage from "../src/views/LandingPage/LandingPage"
import Home from "../src/views/Home/Home"
import Detail from "../src/views/Detail/Detail"
import Create from "./views/Create/Create"
import About from "../src/views/About/About"

import NavBar from "./components/NavBar/NavBar"

import './App.css';

function App() {
  const location = useLocation()

  //Search
//   async function search(name){
//     try {
//         const response = await fetch(`/api/getDogsByName?name=${name}`);
//         const data = await response.json();
//         setDogs(data);
//       } catch (error) {
//         console.error('Error al buscar perros:', error);
//       }
// }

  return (
    <div className="App">
      {/* Mientras que la ruta sea diferente a "/" se debe mostrar la NavBar */}
      {/* {location.pathname !== "/" && <NavBar />} */}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App;