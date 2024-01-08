const express = require("express");

const server = express();

//middleware Global
server.use((req, res, next)=>{
    console.log(`URL Chamada: ${req.url }`)
    return next();
});

server.get("/cursos", (req, res) => {
    return res.json({casa: "bola"});
});

server.listen(2000);