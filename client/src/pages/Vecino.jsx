// Import librerias react
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Import nuestros componentes
import { UserContext } from '../context/UserContext'
import { fetchCorreos, deleteMensaje } from '../api'
import VolverAInicio from '../components/util/VolverAInicio'
import Logout from '../components/log/Logout'
// Import css/imagenes
import styles from '../css/vecino.module.css'
import bin from '../css/img/delete_icon.png'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/Header'

export default function Vecino() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [mesages, setMesages] = useState()
  const ref = useRef()

  // Usamos la api para obtener los correos al cargar el componente
  useEffect(() => {
    fetchCorreos(user.token)
      .then((response) => {
        if (response) {
          setMesages(response)
        }
      })
  }, [user, navigate])

  // Usamos la api para eliminar el correo
  const handleDelete = (e) => {
    deleteMensaje(user.token, e.target.id)
      .then((response) => {
        if (response.deleted) {
          fetchCorreos(user.token)
            .then((messages) => setMesages(messages))
        } else {
          alert('No se pudo eliminar el mensaje')
        }
      })
  }

  return (
    <div className={styles.vecino}>
      <Header />
      <h1>Bienvenido a su buzón</h1>
      <div className={styles.buzon}>
        <div className={styles.mensajes}>
          <AnimatePresence mode={'popLayout'}>
            {mesages?.map(({ id_mensaje, mensaje, asunto }) => {
              return (
                <motion.div
                  layout
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring', duration: 1 }}
                  key={`Mensaje: ${id_mensaje}`}
                  className={styles.mensajeContainer}
                >
                  <img
                    id={id_mensaje}
                    src={bin}
                    alt='bin'
                    onClick={(e) => handleDelete(e)}
                  />
                  <div
                    className={styles.mensaje}
                    onClick={() => {
                      ref.current.innerText = mensaje
                    }}
                  >
                    {asunto}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        <div className={styles.mostrarMensaje} ref={ref}>
          {mesages?.length ? 'Seleccione un mensaje' : 'No tienes mensajes :('}
        </div>
      </div>
      <VolverAInicio />
      <Logout />
    </div>
  )
}
