import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/index.css'

export default function VolverAInicio() {
  return (
    <Link to="/" className="link">
      Volver al inicio
    </Link>
  )
}
