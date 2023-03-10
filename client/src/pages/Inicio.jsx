// Import librerias react
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
// Import nuestros componentes
import ListaVecinos from '../components/ListaVecinos'
import { fetchUsuarios } from '../api'
import { UserContext } from '../context/UserContext'
// Import css/imagenes
import image_buzon from '../css/img/buzon_vecinal.png'
import '../css/index.css'

export default function Inicio() {
  const { user } = useContext(UserContext)
  const role = () => {
    const parts = user.split('.')
    const decodedPayload = atob(parts[1])
    const payloadObj = JSON.parse(decodedPayload)

    return payloadObj.role
  }
  const [usuarios, setUsuarios] = useState(null)

  // Usamos la api para obtener los usuarios al cargar el componente
  useEffect(() => {
    fetchUsuarios().then((response) => setUsuarios(response))
  }, [])

  return (
    <div className="app">
      <div className="contenedor">
        <div className="texto">
          <h3>Buzón Vecinal</h3>
          <p>
            Una nueva forma de recibir tu correo, más rápido, más fácil, más
            cómodo y sin papel.
          </p>
        </div>

        <div className="shape">
          <svg
            data-name="Layer 1"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <img src={image_buzon} alt="imagen_header" />
      </div>

      <div className="usuarios">
        <ListaVecinos users={usuarios} />
      </div>

      <div className="mensaje">
        {user ? (
          <button className="button-mensaje">
            <Link
              to={role() === 'admin' ? '/admin' : '/buzon'}
              className="button"
            >
              {role() === 'admin' ? 'Administrar' : 'Volver a buzon'}
            </Link>
          </button>
        ) : (
          <></>
        )}
        <button className="button-mensaje">
          <Link to="/cartero" className="button">
            Escribir carta
          </Link>
        </button>
      </div>

      <div className="footer">
        <Link to="/login-admin" className="button">
          Admin
        </Link>
      </div>
    </div>
  )
}
