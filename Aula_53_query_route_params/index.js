const express = require('express');

const server = express();

//Query params = ?nome=NodeJs
//Route params =  /curso/2
//Request body = { node: 'Nodejs', tipo: 'Backend'}

server.get('/cursos/:id', (req, res) => {
    const nome = req.query.nome; //Query params
    const id = req.params.id; //Route params

    return res.json({
                        nome: `Aprendendo ${ nome }`,
                        id: id
                    })
});

server.listen(2000);