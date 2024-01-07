const express = require('express');

const server = express();
const cursos = ["JavaScript", "Node JS", "Python", "React"]

//indicando que posso receber um json
server.use(express.json());

server.get('/cursos', (req, res)=>{
    return res.json(cursos);
});

server.get('/cursos/:id', (req, res) => {
    const id = req.params.id;
    return res.json(cursos[id]);
});

// POST - Adicionando curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

// PUT - Editando curso
server.put('/cursos/:id', (req, res)=> {
    const { id }  = req.params
    const { name } = req.body

    cursos[id] = name

    return res.json(cursos)

});


server.listen(2000)