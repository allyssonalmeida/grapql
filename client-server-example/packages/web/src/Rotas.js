import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';

function Rotas() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sign-in"  element={<Signin />}/>
    </Routes> 
  );
}

export default Rotas;