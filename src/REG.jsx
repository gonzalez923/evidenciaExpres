import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  
    return(
      <>
        <br />
        <h2>Formulario de Registro</h2>

       <label for="nombre">Nombre:</label>
       <input type="text" id="nombre" name="nombre" required></input>

       <label for="apellido">Apellido:</label>
       <input type="text" id="apellido" name="apellido" required></input>

       <label for="nombre_perro">Nombre del Perro:</label>
       <input type="text" id="nombre_perro" name="nombre_perro" required></input>

      <label for="raza">Raza del Perro:</label>
      <input type="text" id="raza" name="raza" required></input>

      
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required></input>

      <label for="sexo">Sexo:</label>
            <select id="sexo" name="sexo">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
            </select>
          
            <input type="submit" value="Enviar"></input>
      </>
    );
  }    
    
    

export default App
