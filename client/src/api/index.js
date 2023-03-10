const ENDPOINT = 'http://localhost'

/* Usuarios */

export async function fetchUsuarios() {
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  }
  const response = await fetch(`${ENDPOINT}/api/usuarios.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

export async function fetchUsuario(jwt, mail) {
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      jwt: jwt,
      mail: mail,
    }),
  }
  const response = await fetch(`${ENDPOINT}/api/usuario.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

export async function fetchCorreos(jwt) {
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      jwt: jwt,
    }),
  }
  const response = await fetch(`${ENDPOINT}/api/correos.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

export async function deleteMensaje(jwt, message) {
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      jwt: jwt,
      message: message,
    }),
  }
  const response = await fetch(`${ENDPOINT}/api/borrarMensaje.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

/* Cartero */

export async function sendMensaje({ email, asunto, mensaje }) {
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      mail: email,
      subject: asunto,
      content: mensaje,
    }),
  }
  const response = await fetch(`${ENDPOINT}/api/enviarMensaje.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

/* Admin */

export async function insertUser(jwt, { correo, contrasena, imagen }) {
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      jwt: jwt,
      password: contrasena,
      user: correo,
      image: imagen,
    }),
  }
  const response = await fetch(`${ENDPOINT}/api/insertUser.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

export async function updateUser(jwt, { correo, contrasena, imagen }) {
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      jwt: jwt,
      user: correo,
      password: contrasena,
      image: imagen,
    }),
  }
  const response = await fetch(`${ENDPOINT}/api/updateUser.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

export async function deleteUsuario(jwt, mail) {
  console.log(jwt, mail)
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      jwt: jwt,
      mail: mail,
    }),
  }
  const response = await fetch(`${ENDPOINT}/api/borrarUsuario.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

/* Autentificación */

export async function authUser({ user, password }) {
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: user,
      password: password,
    }),
  }
  const response = await fetch(`${ENDPOINT}/api/authUser.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

export async function authAdmin({ user, password }) {
  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: user,
      password: password,
    }),
  }
  const response = await fetch(`${ENDPOINT}/api/authAdmin.php`, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}
