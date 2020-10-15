import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Paz.png'
import './styles.css';
class Inicio extends React.Component {
render () {
  return (
    <div className="bg-primary">
    <div className="container">
      <div className="text-center" >
        <h1 className="display-1">PHYSCO</h1>
       <img src= {logo} width="180px" height="250px"/> 
      </div>
      <form onSubmit ={(e) => login(e)} >
        <div class="form-group">
          <label for="exampleInputEmail1">Correo Electrónico</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          <small id="emailHelp" class="form-text">*Este campo es obligatorio.</small>
          <small id="emailHelp" class="form-text">No compartiremos tu Email con nadie.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1" required />
          <small id="emailHelp" class="form-text">*Este campo es obligatorio.</small>
        </div>
        <div className = "text-center">
        <Link to="/Home" class ="btn btn-dark btn-lg">Iniciar Sesión</Link>
        <p>o</p>
        <Link to="/registro" class ="btn btn-dark btn-lg">Registrarse</Link>
        </div>
      </form>
    
    </div>
    </div>
  );
}
}

export default Inicio;