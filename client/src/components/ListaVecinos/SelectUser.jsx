// Import librerias react
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// Import nuestros componentes
import { UserContext } from '../../context/UserContext'
import { ENDPOINT } from '../../api'
// Import css/imagenes
import placeholder from '../../css/img/placeholder.png'

export default function SelectUser({ image, vecino, mail }) {
  const { setSelected } = useContext(UserContext)
  const navigate = useNavigate()

  const handleClick = (mail) => {
    setSelected(mail)
    navigate('/login')
  }
  return (
    <>
      <div className='imagenVecino'>
        <img
          src={image ? `${ENDPOINT}/${image}` : placeholder}
          alt='profile'
          title={mail}
          onClick={() => handleClick(mail)}
        />
      </div>
      <p>{vecino}</p>
    </>
  )
}
