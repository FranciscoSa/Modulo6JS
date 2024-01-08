const express = require("express");

const server = express();

server.get("/cursos", (req, res) => {
    return res.json({casa: "bola"});
});

server.listen(2000);