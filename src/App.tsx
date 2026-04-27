import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Favoritos from "./Favoritos/Index";
import Home from "./Home/Index";
import Informativa from "./Informativa/Index";
import Equipo from "./Equipo/Index";
import Usuarios from "./Usuarios/Index";
import Original from "./Original/Index";

import "./App.css";

function App() {
  return (
    <Router>
      <nav className="c-menu">
        <Link to="/"><p>Home</p></Link>
        <Link to="/favoritos"><p>Favoritos</p></Link>
        <Link to="/original"><p>Original</p></Link>
        <Link to="/informativa"><p>Informativa</p></Link>
        <Link to="/usuarios"><p>Usuario</p></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/original" element={<Original />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/equipo/:equipo" element={<Equipo />} />
      </Routes>
    </Router>
  );
}

export default App;