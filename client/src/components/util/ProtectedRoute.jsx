// Import librerias react
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
// Import nuestros componentes
import { UserContext } from '../../context/UserContext'
import Redirect from './Redirect'

// Las rutas que se situen dentro de este componente solo
// se renderizan si el usuario ha iniciado sesion,
// en caso contrario redirecciona a la pagina de inicio
export default function ProtectedRoute({ role }) {
  const { user } = useContext(UserContext)
  const storage = localStorage.getItem('user')

  const validUserRole = (currentUser) => {
    if (currentUser === null || currentUser['token'] === null || typeof currentUser['token'] !== 'string') {
      return false
    }
    
    const parts = currentUser['token'].split('.')
    const decodedPayload = atob(parts[1])
    const payloadObj = JSON.parse(decodedPayload)

    return payloadObj.role === role
  }

  return validUserRole(user) || validUserRole(storage) ? (
    <Outlet />
  ) : (
    <Redirect />
  )
}
