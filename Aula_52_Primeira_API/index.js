const express = require('express');

const server = express();

server.get('/cursos', (req, res) => {
    return res.json({ curso: "Node JS"})
});

server.listen(2000)