const express = require('express');

const server = express();

//Query params = ?nome=NodeJs
//Route params =  /curso/2
//Request body = { node: 'Nodejs', tipo: 'Backend'}

server.get('/cursos', (req, res) => {
    const nome = req.query.nome;
    return res.json({nome: nome})
});

server.listen(2000);