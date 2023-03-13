# GIT HUB

1.- Ejecuta el siguiente comando en la terminal donde quieras guardar el repositorio. (Yo lo ejecuto en c:/dev, una carpeta que me he creado).
<pre>git clone -b master https://github.com/SammyHM/Buzon-Vecinal</pre>
2.- El resto igual que antes:
<pre>
  git checkout -b [rama]
  git push origin [rama]
</pre>

# SETUP

1.- Necesitas tener `docker` instalado. <br />
2.- Abre la terminal en la ruta del proyecto y ejecuta `docker-compose up -d`. Tardará unos cuantos minutos la primera vez. <br />
3.- El servidor está en localhost, puerto 80 (`localhost:80`). <br />
4.- La base de datos está en localhost, puerto 8001 (`localhost:8001`), usuario: admin, contraseña: admin. <br />
5.- El cliente está en  localhost, puerto 3000 (`localhost:3000`). <br />

El cliente da problemas, solo se actualiza la página si apagas y vuelve a enceder el contenedor del cliente aunque internamente los ficheros si cambien. <br />
Total, que si quieres que se actualize la página automaticamente para el desarrollo, apaga el contenedor en `Docker Desktop` y hacemos como antes:
<pre>
  npm install
  npm start
</pre>

# RECOMENDACIÓN

Docker está configurado para usar mucha ram, yo lo he limitado creandome un fichero `.wslconfig` en la carpeta de usuario `%userprofile%`. <br />
Su contenido: <br />
<pre>
  [wsl2]
  memory=2GB
</pre>
(Puedes cambiar el límite de memoria usada al que quieras). <br />

Una vez que termines de usar docker, deberías finalizar todos los procesos de docker (excepto `Docker Desktop Service`) desde el administrador de tareas y esperar un minuto o dos para que `vmmem` deje de ejecutarse.
