// Import librerias react
import React from 'react'
import { Link } from 'react-router-dom'
// Import css/imagenes
import styles from '../../css/login.module.css'
import image_login from '../../css/img/buzon_login.png'

export default function Login({
  title,
  userField,
  submit,
  formState,
  errorMsg,
  isDisabled,
  salir,
}) {
  // Hooks y funciones de un formulario react
  const [formData, setFormData] = formState

  const handleInput = (e) => {
    const value = e.target.value
    setFormData({
      ...formData,
      [e.target.id]: value,
    })
  }

  const handleSubmit = submit

  return (
    <div className={styles.app}>
      <div className={styles.svg}></div>

      <div className={styles.login}>
        <div className={styles.imgLogin}>
          <img src={image_login} alt='' />
        </div>

        <hr />

        <form onSubmit={handleSubmit}>
          <h2>{title}</h2>
          <div className={styles.campo}>
            <label htmlFor='user'>{userField}</label>
            <input
              id='user'
              type='text'
              value={formData.user}
              onChange={handleInput}
              disabled={isDisabled}
            />
          </div>
          <div className={styles.campo}>
            <label htmlFor='password'>Contraseña</label>
            <input
              id='password'
              type='password'
              value={formData.password}
              onChange={handleInput}
            />
          </div>
          <span className='error'>{errorMsg}</span>
          <button>Iniciar sesion</button>
          <Link onClick={salir} to='/'>
            Salir
          </Link>
        </form>
      </div>
    </div>
  )
}
