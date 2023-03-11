# GIT HUB

1.- Ejecuta el siguiente comando en la terminal, donde quieras guardar el repositorio. (Yo lo ejecuto en c:/dev, una carpeta que me he creado).
`git clone -b master https://github.com/SammyHM/Buzon-Vecinal` <br />
2.- Igual que hacíamos antes, te creas una rama `git checkout -b [rama]` y la subes con `git push`.

# SERVIDOR

1.- Necesitas tener `docker` instalado. <br />
2.- Abre la terminal en la ruta servidor y ejecuta `docker compose up`. <br />
3.- No se debería acceder a las rutas manualmente, pero si se quiere depurar
puedes escribir en el navegardor localhost, puerto 80 (`localhost:80`). <br />
4.- La base de datos está en localhost, puerto 8001 (`localhost:8001`),
usuario: admin, contraseña: admin. 

# CLIENTE

1.- Necesitas tener `node` instalado. <br />
2.- Abre la terminal en la ruta cliente y ejecuta `npm install react-scipts & npm start`. <br />
3.- Se puede acceder al cliente por localhost, puerto 3000 (`localhost:3000`).
