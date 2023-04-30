// Import nuestros componentes
import Cargando from '../util/Cargando'
// Import css/imagenes
import styles from '../../css/admin.module.css'

export default function UserForm({title, formDataState, handleSubmit, editUser}) {
  const [formData, setFormData] = formDataState

  const handleInput = (e) => {
    const value = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  return formData ? (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{title} usuario</h2>
        <label htmlFor='user'>Nombre</label>
        <input
          id='nombre'
          name='nombre'
          type='text'
          value={formData.nombre}
          onChange={handleInput}
          required
        />
        <label htmlFor='user'>Piso</label>
        <input
          id='piso'
          name='piso'
          type='number'
          value={formData.piso}
          onChange={handleInput}
          min={1}
          required
        />
        <label htmlFor='user'>Puerta</label>
        <input
          id='puerta'
          name='puerta'
          type='text'
          value={formData.puerta}
          onChange={handleInput}
          required
        />
        <label htmlFor='user'>Usuario</label>
        <input
          id='user'
          name='user'
          type='email'
          value={formData.user}
          onChange={handleInput}
          required
        />
        {
          !editUser ? (
            <>
              <label htmlFor='password'>Contraseña</label>
              <input
                id='password'
                name='password'
                type='password'
                value={formData.password}
                onChange={handleInput}
                required
              />
            </>
          ) : (
            <></>
          )
        }
        <label htmlFor='image'>Imagen</label>
        <input
          id='image'
          name='imagen'
          type='text'
          value={formData.imagen ? formData.imagen : ''}
          onChange={handleInput}
        />
        <button>{title}</button>
      </form>
    ) : (
      <Cargando />
    )
}