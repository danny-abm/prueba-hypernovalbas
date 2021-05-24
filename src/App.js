import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import GastosA from './components/Gastos';
//importando componente de formulario gastos

import Gastos from './components/Gastos.js';

function App() {
  const [fgasto, setfgasto]=useState([])

  useEffect(()=>{
      const getgasto = () =>{
          fetch('http://localhost:8080/api/gastos')
          .then(res=>res.json())
          .then(res=>console.log(res))
      }
      getgasto()
  },[])

  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path ="/gastos" component={Gastos}/>
        <GastosA fgasto={fgasto}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
