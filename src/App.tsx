import './styles/App.css'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
// import { HashRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/stars.css'

function App() {

  return (
    <>
    <Router>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galeria' element={<Menu selectedCategory="OCTUBRE"/>} />
        <Route path='/galeria/octubre' element={<Menu selectedCategory="OCTUBRE"/>} />
        <Route path='/galeria/noviembre' element={<Menu selectedCategory="NOVIEMBRE"/>} />
        <Route path='/galeria/diciembre' element={<Menu selectedCategory="DICIEMBRE"/>} />
        {/* <Route path='/menu/bebidas' element={<Menu selectedCategory="Bebidas"/>} />
        <Route path='/menu/promociones' element={<Menu selectedCategory="Promociones"/>} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
