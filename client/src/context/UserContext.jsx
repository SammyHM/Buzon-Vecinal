// Import librerias react
import { createContext, useEffect, useState } from 'react'

// Guarda el contexto del usuario
export const UserContext = createContext(null)

// Los elementos hijos pueden acceder a este contexto
export default function UserContextProvider({ children }) {
  // Guarda el usuario seleccionado en el inicio
  const [selected, setSelected] = useState(null)
  // Guarda el usuario en sesion
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  // Guarda la lista de usuarios
  const [userList, setUserList] = useState([])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  return (
    <UserContext.Provider value={{ selected, setSelected, user, setUser, userList, setUserList }}>
      {children}
    </UserContext.Provider>
  )
}
