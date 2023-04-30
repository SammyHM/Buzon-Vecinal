/* Async petition*/

export const ENDPOINT = 'http://localhost:8000'

async function fetchData(method, headers, body, route) {
  const args = {
    method: method,
    headers: headers ? headers : {},
    body: body,
  }

  const response = await fetch(ENDPOINT + route, args)
  if (!response.ok) throw new Error('Respuesta no OK')
  return response.json()
}

/* Usuarios */

export async function fetchPublicUsuarios() {
  return fetchData('GET', null, null, '/vecinos')
}

export async function fetchCorreos(jwt) {
  return fetchData(
    'GET',
    { Authorization: jwt },
    null,
    '/buzones'
  )
}

export async function deleteMensaje(jwt, id) {
  return fetchData(
    'DELETE',
    { Authorization: jwt },
    null,
    `/buzones/${id}`
  )
}

/* Cartero */

export async function sendMensaje({ user, mensaje, asunto }) {
  return fetchData(
    'POST',
    null,
    JSON.stringify({
      user: user,
      mensaje: mensaje,
      asunto: asunto,
    }),
    '/buzones'
  )
}

/* Admin */

export async function fetchAdminUsuarios(jwt, id) {
  let query = id ? `?id=${id}` : ''
  return fetchData(
    'GET',
    { Authorization: jwt },
    null,
    `/admin/vecinos${query}`)
}

export async function insertUser(jwt, { nombre, piso, puerta, user, password, imagen }) {
  return fetchData(
    'POST',
    { Authorization: jwt },
    JSON.stringify({
      nombre: nombre,
      piso: piso,
      puerta: puerta,
      user: user,
      password: password,
      imagen: imagen
    }),
    `/vecinos`
  )
}

export async function updateUser(jwt, { nombre, piso, puerta, user, imagen }, id) {
  return fetchData(
    'PUT',
    { Authorization: jwt },
    JSON.stringify({
      nombre: nombre,
      piso: piso,
      puerta: puerta,
      user: user,
      imagen: imagen
    }),
    `/vecinos/${id}`
  )
}

export async function deleteUsuario(jwt, id) {
  return fetchData(
    'DELETE',
    { Authorization: jwt },
    null,
    `/vecinos/${id}`
  )
}

/* Autentificación */

export async function authUser({ user, password }) {
  return fetchData(
    'POST', 
    null,
    JSON.stringify({
      user: user,
      password: password,
    }),
    '/login/user'
  )
}

export async function authAdmin({ user, password }) {
  return fetchData(
    'POST', 
    null,
    JSON.stringify({
      user: user,
      password: password,
    }),
    '/login/admin'
  )
}
