const express = require('express');

const server = express();

//Query params = ?nome=NodeJs
//Route params =  /curso/2
//Request body = { node: 'Nodejs', tipo: 'Backend'}

server.get('/cursos', (req, res) => {
    return res.json({nome: "casa"})
});

server.listen(2000);