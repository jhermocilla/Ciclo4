import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Registro from "./components/Registro";
import Actualizar from "./components/Actordenes";
import Regorden from "./components/Regordenes";
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/actualizar_ordenes" element={<Actualizar />}/>
        <Route path="/registrar_ordenes" element={<Regorden />}/>
      </Routes>
    </Router>
  )


}

export default App