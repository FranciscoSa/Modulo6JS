const express = require('express');

const server = express();

const cursos = ['NodeJS', 'JavaScript', 'React Native']

server.get("/cursos/:index",(req, res)=>{
    const { index } = req.params
    return res.json(cursos[index]);
});

server.listen(2000);