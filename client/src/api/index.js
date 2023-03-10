/* Async petition*/

async function fetchServer(body, route) {
  const ENDPOINT = 'http://localhost'

  const args = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: body,
  }

  const response = await fetch(ENDPOINT + route, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

/* Usuarios */

export async function fetchUsuarios() {
  return fetchServer(null, '/api/usuarios.php')
}

export async function fetchUsuario(jwt, mail) {
  return fetchServer(
    JSON.stringify({
      jwt: jwt,
      mail: mail,
    }),
    '/api/usuario.php'
  )
}

export async function fetchCorreos(jwt) {
  return fetchServer(
    JSON.stringify({
      jwt: jwt,
    }),
    '/api/correos.php'
  )
}

export async function deleteMensaje(jwt, message) {
  return fetchServer(
    JSON.stringify({
      jwt: jwt,
      message: message,
    }),
    '/api/borrarMensaje.php'
  )
}

/* Cartero */

export async function sendMensaje({ email, asunto, mensaje }) {
  return fetchServer(
    JSON.stringify({
      mail: email,
      subject: asunto,
      content: mensaje,
    }),
    '/api/enviarMensaje.php'
  )
}

/* Admin */

export async function insertUser(jwt, { correo, contrasena, imagen }) {
  return fetchServer(
    JSON.stringify({
      jwt: jwt,
      password: contrasena,
      user: correo,
      image: imagen,
    }),
    '/api/insertUser.php'
  )
}

export async function updateUser(jwt, { correo, contrasena, imagen }) {
  return fetchServer(
    JSON.stringify({
      jwt: jwt,
      user: correo,
      password: contrasena,
      image: imagen,
    }),
    '/api/updateUser.php'
  )
}

export async function deleteUsuario(jwt, mail) {
  return fetchServer(
    JSON.stringify({
      jwt: jwt,
      mail: mail,
    }),
    '/api/borrarUsuario.php'
  )
}

/* Autentificación */

export async function authUser({ user, password }) {
  return fetchServer(
    JSON.stringify({
      user: user,
      password: password,
    }),
    '/api/authUser.php'
  )
}

export async function authAdmin({ user, password }) {
  return fetchServer(
    JSON.stringify({
      user: user,
      password: password,
    }),
    '/api/authAdmin.php'
  )
}
