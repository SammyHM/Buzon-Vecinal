// Import librerias react
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// Import nuestros componentes
import { fetchUsuarios } from '../api'
import ListaVecinos from '../components/ListaVecinos'
import Logout from '../components/Logout'
import VolverAInicio from '../components/VolverAInicio'
// Import css/imagenes
import '../css/index.css'
import styles from '../css/admin.module.css'

export default function Admin() {
  const navigate = useNavigate()
  const [users, setUsers] = useState(null)

  // Usamos la api para obtener los usuarios al cargar el componente
  useEffect(() => {
    fetchUsuarios().then((response) => setUsers(response))
  }, [users])

  return (
    <div className={styles.admin}>
      <div className={styles.shape}>
        <div className={styles.custom}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Administración</h1>
        <div className={styles.botonUsuario}>
          <button
            onClick={() => {
              navigate('/admin/add')
            }}
          >
            Añadir usuario
          </button>
        </div>
        <div className={styles.usuarios}>
          <ListaVecinos users={users} mode={'admin'}></ListaVecinos>
        </div>
        <Outlet />
        <div className={styles.button_container}>
          <div className={styles.botones}>
            <VolverAInicio />
            <Logout />
          </div>
        </div>
      </div>
    </div>
  )
}
