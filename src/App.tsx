import './styles/App.css'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { HashRouter, Route, Routes } from 'react-router-dom';
import './styles/stars.css'

function App() {

  return (
    <>
    <HashRouter>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galeria' element={<Menu selectedCategory="Octubre"/>} />
        <Route path='/galeria/octubre' element={<Menu selectedCategory="Octubre"/>} />
        <Route path='/galeria/noviembre' element={<Menu selectedCategory="Noviembre"/>} />
        <Route path='/galeria/diciembre' element={<Menu selectedCategory="Diciembre"/>} />
        {/* <Route path='/menu/bebidas' element={<Menu selectedCategory="Bebidas"/>} />
        <Route path='/menu/promociones' element={<Menu selectedCategory="Promociones"/>} /> */}
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
