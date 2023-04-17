// Import librerias react
import React, { useEffect, useState, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// Import nuestros componentes
import { fetchAdminUsuarios } from '../api'
import { UserContext } from '../context/UserContext'
import ListaVecinos from '../components/ListaVecinos'
import Logout from '../components/log/Logout'
import VolverAInicio from '../components/util/VolverAInicio'
import Header from '../components/Header'
// Import css/imagenes
import '../css/index.css'
import styles from '../css/admin.module.css'

export default function Admin() {
  const { user, userList, setUserList } = useContext(UserContext)
  const navigate = useNavigate()

  // Usamos la api para obtener los usuarios al cargar el componente
  useState(() => {
    fetchAdminUsuarios(user.token, null).then((response) => setUserList(response))
  }, [userList])

  return (
    <div className={styles.admin}>
      <Header />

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
          <ListaVecinos users={userList} mode={'admin'}></ListaVecinos>
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
