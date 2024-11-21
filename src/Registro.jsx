import { useEffect, useState } from 'react'
import './App.css'

function Registro() {
  const [usuarioRegistro, setUsuarioRegistro] = useState('')
  const [claveRegistro, SetClaveRegistro] = useState('')

  function cambiarUsuarioRegistro(evento) {
    setUsuarioRegistro(evento.target.value)
  }
  function cambiarClaveRegistro(evento) {
    SetClaveRegistro(evento.target.value)
  }
  async function registrar() {
    const peticion = await fetch('http://localhost:3000/registro?usuario=' + usuarioRegistro + '&clave=' + claveRegistro, { credentials: 'include' })
    if (peticion.ok) {
      alert("usuario registrado")
    } else {
      alert('Usuario no registrado')
    }
  }
  useEffect(() => {
  }, [])
  return (
    <>
    
      <h1>Registrar</h1>
      <input type="text" name="usuario" id="usuario" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} />
      <input type="password" name="clave" id="clave" value={claveRegistro} onChange={cambiarClaveRegistro} />
      <button onClick={registrar}><h2>Registrar</h2></button>
    </>
  )
}
export default Registro