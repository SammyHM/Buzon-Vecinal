// Import librerias react
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// Import nuestros componentes
import { authUser } from '../api'
import { authAdmin } from '../api'
import { UserContext } from '../context/UserContext'
import FormularioLogin from '../components/log/Login'

export default function Login({ mode }) {
  const navigate = useNavigate()
  const { selected, setSelected, setUser } = useContext(UserContext)
  const formState = useState({
    user: mode === 'admin' ? '' : selected ? selected : '',
    password: '',
  })
  const [errorMsg, setErrorMsg] = useState('')

  const adminSubmit = (e) => {
    e.preventDefault()
    authAdmin(formState[0]).then((response) => {
      if (response.jwt) {
        setSelected(null)
        setUser(response.jwt)
        navigate('/admin')
      } else {
        setErrorMsg('Usuario y contraseña no coinciden')
      }
    })
  }

  const userSubmit = (e) => {
    e.preventDefault()
    authUser(formState[0]).then((response) => {
      if (response.jwt) {
        setSelected(null)
        setUser(response.jwt)
        navigate('/buzon')
      } else {
        setErrorMsg('Usuario y contraseña no coinciden')
      }
    })
  }

  return (
    <>
      {mode === 'admin' ? (
        <FormularioLogin
          title={'Admin login'}
          userField={'Usuario'}
          submit={adminSubmit}
          formState={formState}
          errorMsg={errorMsg}
        />
      ) : (
        <FormularioLogin
          title={'Login'}
          userField={'Buzon'}
          submit={userSubmit}
          formState={formState}
          errorMsg={errorMsg}
          isDisabled={selected ? true : false}
          salir={() => {
            setSelected(null)
          }}
        />
      )}
    </>
  )
}
