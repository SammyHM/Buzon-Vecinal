// Import librerias react
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Import nuestros componentes
import App from './App'
import UserContextProvider from './context/UserContext'

// Aplicacion envuelta por:
// 1.- Enrutador react
// 2.- Contexto con información sobre el usuario (Requiere React.StrictMode)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
)
