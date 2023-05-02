// Import librerias react
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
// Import nuestras librerias
import SelectUser from './SelectUser'
import AdminUser from './AdminUser'
import Cargando from '../util/Cargando'
// Import css/imagenes
import 'swiper/css'
import 'swiper/css/navigation'

// Devuelve una lista de vecinos con swiper slide, dado un json de usuarios
export default function ListaVecinos({ users, mode }) {
  const [slides, setSlides] = useState(3);

  window.addEventListener('resize', () => {
    setSlides(window.innerWidth < 768 ? 2 : 3)
  })

  return (
    <>
      <h1>Vecinos</h1>
      {users ? (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={slides}
          spaceBetween={mode === 'admin' ? 30 : -30}
          className='mySwiper'
        >
          {users.map(({id, imagen, nombre, piso, puerta, user }, id_component) => {
            return (
              <SwiperSlide key={id_component}>
                {mode === 'admin' ? (
                  <AdminUser id={id} image={imagen} vecino={`${nombre}, ${piso} ${puerta}`} mail={user} />
                ) : (
                  <SelectUser image={imagen} vecino={`${nombre}, ${piso} ${puerta}`} mail={user} />
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      ) : (
        <Cargando />
      )}
    </>
  )
}
