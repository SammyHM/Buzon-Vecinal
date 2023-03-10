// Import librerias react
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Import nuestros componentes
import { UserContext } from '../context/UserContext'
import { fetchCorreos } from '../api'
import { deleteMensaje } from '../api'
import VolverAInicio from '../components/util/VolverAInicio'
import Logout from '../components/log/Logout'
// Import css/imagenes
import styles from '../css/vecino.module.css'
import bin from '../css/img/delete_icon.png'
import { AnimatePresence, motion } from 'framer-motion'

export default function Vecino() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [mesages, setMesages] = useState()
  const ref = useRef()

  // Usamos la api para obtener los correos al cargar el componente
  useEffect(() => {
    fetchCorreos(user).then((response) => {
      if (response.mesages) {
        setMesages(response.mesages)
      } else {
        navigate('/')
      }
    })
  }, [user, navigate])

  // Usamos la api para eliminar el correo
  const handleDelete = (e) => {
    deleteMensaje(user, e.target.id).then((response) => {
      if (response.result) {
        fetchCorreos(user).then((response) => setMesages(response.mesages))
      } else {
        alert('No se pudo eliminar el mensaje')
      }
    })
  }

  return (
    <div className={styles.vecino}>
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
      <h1>Bienvenido a su buzón</h1>
      <div className={styles.buzon}>
        <div className={styles.mensajes}>
          <AnimatePresence mode={'popLayout'}>
            {mesages?.map(({ id_buzon, asunto, mensaje }, id) => {
              return (
                <motion.div
                  layout
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring', duration: 1 }}
                  key={id_buzon}
                  className={styles.mensajeContainer}
                >
                  <img
                    id={id_buzon}
                    src={bin}
                    alt="bin"
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
