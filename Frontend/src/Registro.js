import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Paz.png'
import './styles.css';
class Registro extends React.Component {
render() {
  return (
    <div className="bg-primary">
    <div className="container">
      <div className="text-center">
        <h1 className="display-1">PHYSCO</h1>
       <img src= {logo} width="180px" height="250px"/> 
       <br/>
       <br/>
       <h6>*Todos los campos son obligatorios</h6>
      </div>
      <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Correo Electrónico</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo Electrónico" required/>
    <br/>
    <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" required/>
        </div>
        
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Tipo de Vehículo</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Carro</option>
      <option>Moto</option>
      <option>Taxi</option>
    </select>
  </div>
  <div class="form-group">
  <label for="formGroupExampleInput2">Placa del Vehículo</label>
    <input type="text" class="form-control text-uppercase" id="formGroupExampleInput2" required/>
  </div>
  <div class="form-group">
  <label for="formGroupExampleInput2">Fecha de Expedición (SOAT)</label>
    <input type="date" class="form-control" id="formGroupExampleInput2" required/>
  </div>
  <div class="form-group">
  <label for="formGroupExampleInput2">Fecha de Caducidad (SOAT)</label>
    <input type="date" class="form-control" id="formGroupExampleInput2" required/>
  </div>
  <div className = "text-center">
  <Link to="/Home" class ="btn btn-dark btn-lg">Registrarse</Link>
        <br/>
        <br/>
        <p>O</p>
        <Link to="/iniciosesion" class ="btn btn-dark btn-lg">Iniciar Sesión</Link>
        </div>

</form>
      </div>
      </div>
  );
  }
}
  export default Registro;