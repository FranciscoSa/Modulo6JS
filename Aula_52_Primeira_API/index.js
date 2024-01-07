const express = require('express');

const server = express();

server.get('/cursos', () => {
    console.log("acessou a rota");
});

server.listen(2000)