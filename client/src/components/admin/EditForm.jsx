// Import librerias react
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Import nuestros componentes
import { UserContext } from '../../context/UserContext'
import { fetchUsuario, updateUser } from '../../api'
import Cargando from '../util/Cargando'
// Import css/imagenes
import styles from '../../css/admin.module.css'

export default function EditForm() {
  const { user } = useContext(UserContext)
  const { mail } = useParams()
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: '',
    imagen: '',
  })

  useEffect(() => {
    fetchUsuario(user, mail).then((response) => {
      setFormData(response)
    })
  }, [user, mail])

  const handleInput = (e) => {
    const value = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user, formData).then((response) => {
      if (response.result) {
        alert('Exito')
      } else {
        alert('No se pudo actualizar los datos')
      }
    })
  }

  return formData ? (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Editar usuario</h2>
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
      <button>Actualizar</button>
    </form>
  ) : (
    <Cargando />
  )
}
