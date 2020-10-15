import React from 'react';
import {BrowserRouter, Route, Switch}from 'react-router-dom'
import App from "../src/App";
import Inicio from "../src/Inicio";
import Registro from "../src/Registro";
import Rsoat from "../src/rsoat";
import Home from "../src/home.js";
import Soat from "../src/SOAT";
import Misv from "../src/misv";
//import Layout from './Layout'

function Aplicacion(){
  return(
    <BrowserRouter>
  
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/iniciosesion' component={Inicio}/>
      <Route exact path='/registro' component={Registro}/>
      <Route exact path='/registroVehiculo' component={Rsoat}/>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/MiSoat' component={Soat}/>
      <Route exact path='/MisVehiculos' component={Misv}/>
    </Switch>
    
    </BrowserRouter>
  )
}

export default Aplicacion;