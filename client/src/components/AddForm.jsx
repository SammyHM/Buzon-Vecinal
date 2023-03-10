// Import librerias react
import { useContext, useState } from 'react'
// Import nuestros componentes
import { UserContext } from '../context/UserContext'
import { insertUser } from '../api'
import Cargando from './Cargando'
// Import css/imagenes
import styles from '../css/admin.module.css'

export default function AddForm() {
  const { user } = useContext(UserContext)

  const [formData, setFormData] = useState({
    correo: '',
    contrasena: '',
    imagen: '',
  })

  const handleInput = (e) => {
    const value = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    insertUser(user, formData).then((response) => {
      if (response.result) {
        alert('Exito')
      } else {
        alert('No se pudo añadir el usuario')
      }
    })
  }

  return formData ? (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Usuario nuevo</h2>
      <label htmlFor="user">Usuario</label>
      <input
        id="user"
        name="correo"
        type="email"
        value={formData.correo}
        onChange={handleInput}
        required
      />
      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="contrasena"
        type="text"
        value={formData.contrasena}
        onChange={handleInput}
        required
      />
      <label htmlFor="image">Imagen</label>
      <input
        id="image"
        name="imagen"
        type="text"
        value={formData.imagen ? formData.imagen : ''}
        onChange={handleInput}
      />
      <button>Añadir</button>
    </form>
  ) : (
    <Cargando />
  )
}
