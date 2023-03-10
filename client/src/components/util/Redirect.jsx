// Import librerias react
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Redirecciona a la ruta to
export default function Redirect({ to }) {
  const navigate = useNavigate()
  useEffect(() => {
    to ? navigate(to) : navigate('/')
  }, [to, navigate])
  return <></>
}
