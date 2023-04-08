// Import librerias react
import { useContext, useState } from 'react'
// Import nuestros componentes
import { UserContext } from '../../context/UserContext'
import { fetchAdminUsuarios, insertUser } from '../../api'
import UserForm from './UserForm'

export default function AddForm() {
  const { user, setUserList } = useContext(UserContext)

  const formDataState = useState({
    nombre: '',
    piso: '',
    puerta: '',
    user: '',
    password: '',
    imagen: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    insertUser(user.token, formDataState[0])
      .then((response) => {
        if (response.inserted) {
          fetchAdminUsuarios(user.token, null).then((response) => setUserList(response))
        } else {
          alert('No se pudo añadir el usuario')
        }
      })
      .catch((error) => {
        alert('Ya existe el usuario')
      })

  }

  return <UserForm title={'Añadir'} formDataState={formDataState} handleSubmit={handleSubmit} readOnlyPassword={false}/>
}
