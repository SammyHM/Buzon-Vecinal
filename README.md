# GIT HUB

1.- Ejecuta el siguiente comando en la terminal donde quieras guardar el repositorio. (Yo lo ejecuto en c:/dev, una carpeta que me he creado).
`git clone -b master https://github.com/SammyHM/Buzon-Vecinal` <br />
2.- Igual que hacíamos antes, te creas una rama `git checkout -b [rama]` y la subes con `git push`. <br />

# SETUP

1.- Necesitas tener `docker` instalado. <br />
2.- Abre la terminal en la ruta del proyecto y ejecuta `docker compose up -d`. Tardará unos cuantos minutos la primera vez <br />
3.- El servidor está en localhost, puerto 80 (`localhost:80`). <br />
4.- La base de datos está en localhost, puerto 8001 (`localhost:8001`), usuario: admin, contraseña: admin. <br />
5.- El cliente está en  localhost, puerto 3000 (`localhost:3000`). <br />

# RECOMENDACIÓN

Docker está configurado para usar mucha ram, yo lo he limitado creandome un fichero `.wslconfig` en la carpeta de usuario `%userprofile%`.
Su contenido: <br />
`[wsl2]` <br />
`memory=2GB`
