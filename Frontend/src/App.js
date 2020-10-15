import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Paz.png';
import './styles.css';

class App extends React.Component {
render() {
  return (
    <div className="bg-primary">
    <div className="container">
      <div className="text-center" >
        <h1 className="display-1">PHYSCO</h1>
       <img src= {logo} width="180px" height="250px"/> 
      <br/>
      <br/>
      <br/>
      </div>
      <div className = "text-center">
        <Link to="/iniciosesion" class ="btn btn-dark btn-lg">Iniciar Sesión</Link>
        <br/>
        <br/>
        <p>O</p>
        <Link to="/registro" class ="btn btn-dark btn-lg">Registrarse</Link>
        </div>
        </div>
    </div>
  
    
  );
}
}
export default App;
