// Import librerias react
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Import nuestros componentes
import { UserContext } from '../../context/UserContext'
import { fetchAdminUsuarios, updateUser } from '../../api'
// Import css/imagenes
import UserForm from './UserForm'

export default function EditForm() {
  const { user, setUserList } = useContext(UserContext)
  const { id } = useParams()
  const formDataState = useState({
    nombre: '',
    piso: '',
    puerta: '',
    user: '',
    imagen: ''
  })

  useEffect(() => {
    fetchAdminUsuarios(user.token, id).then((response) => {
      formDataState[1](response[0])
    })
  }, [user.token, id])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.token, formDataState[0], id).then((response) => {
      if (response.updated) {
        fetchAdminUsuarios(user.token, null).then((response) => setUserList(response))
      } else {
        alert('No se pudo actualizar los datos')
      }
    })
  }

  return <UserForm title={'Actualizar'} formDataState={formDataState} handleSubmit={handleSubmit} editUser={true}/>
}
