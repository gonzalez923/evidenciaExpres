import { useEffect, useState } from 'react'
import './App.css'

function Usuarios() {  
  const [usuarios, setUsuarios] = useState([])

  async function obtenerUsuarios() {
    const peticion = await fetch('http://localhost:3000/usuarios', { credentials: 'include'})
    if (peticion.ok) {
      const respuesta = await peticion.json()
      setUsuarios(respuesta)
    }
  }
  async function eliminarUsuario(id){
    const peticion = await fetch('http://localhost:3000/usuarios?id=' + id, { credentials: 'include', method: 'DELETE' })
    if (peticion.ok) {
      alert('usuario eliminado')
      obtenerUsuarios();
    }
  }
  useEffect(() => {
    obtenerUsuarios()
  }, []) 
   
  return (
    <>
    
      <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Usuario</th>
              <th>Clave</th>
              <th>Opcion</th>
            </tr>
          </thead>
          <tbody>
            {
              usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <th>{usuario.id}</th>
                  <th>{usuario.usuario}</th>
                  <th>{usuario.clave}</th>
                  <th>
                    <button 
                      onClick={() => { eliminarUsuario(usuario.id) }}> X
                    </button>
                  </th>
                </tr>
              ))
            }
          </tbody>
        </table>

    </>
  )
}
export default Usuarios