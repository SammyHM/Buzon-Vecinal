// Import librerias react
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
// Import css/imagenes
import 'swiper/css'
import 'swiper/css/navigation'
import SelectUser from './SelectUser'
import AdminUser from './AdminUser'
import Cargando from './Cargando'

// Devuelve una lista de vecinos con swiper slide, dado un json de usuarios
export default function ListaVecinos({ users, mode }) {
  return (
    <>
      <h1>Vecinos</h1>
      {users ? (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={mode === 'admin' ? 30 : -30}
          className="mySwiper"
        >
          {users.map(({ id_vecino, correo, imagen }) => {
            return (
              <SwiperSlide key={id_vecino}>
                {mode === 'admin' ? (
                  <AdminUser mail={correo} image={imagen} />
                ) : (
                  <SelectUser mail={correo} image={imagen} />
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
