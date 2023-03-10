// Import librerias react
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export default function Logout() {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  const handleClick = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  return <button onClick={handleClick}>Finalizar sesion</button>
}
