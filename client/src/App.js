// Import librerias react
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// Import nuestros componentes
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Vecino from './pages/Vecino'
import Cartero from './pages/Cartero'
import Admin from './pages/Admin'
import ProtectedRoute from './components/util/ProtectedRoute'
import EditForm from './components/admin/EditForm'
import AddForm from './components/admin/AddForm'

// Definicion de nuestro sistema de rutas
export default function App() {
  return (
    <Routes>
      <Route index element={<Inicio />} />
      <Route path='/login' element={<Login />} />
      <Route path='/login-admin' element={<Login mode='admin' />} />
      <Route element={<ProtectedRoute role='user' />}>
        <Route path='/buzon' element={<Vecino />} />
      </Route>
      <Route element={<ProtectedRoute role='admin' />}>
        <Route path='/admin' element={<Admin />}>
          <Route path='/admin/edit/:id' element={<EditForm />} />
          <Route path='/admin/add' element={<AddForm />} />
        </Route>
      </Route>
      <Route path='/cartero' element={<Cartero />} />
    </Routes>
  )
}
