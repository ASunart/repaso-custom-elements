//Esta es la sección del servidor que luego lo verán en clase
//Para iniciar y poder ver el proyecto deben primero instalar los modulos (npm i o npm install)
//y luego le dan npm start y entrar al link que aparece en consola

const express = require('express'); 
const server = express(); 

server.use(express.static(__dirname + '/public'));

server.listen(8080, () => {
    console.log('Servidor corriendo en http://localhost:8080');
});