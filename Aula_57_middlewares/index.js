const express = require("express");

const server = express();
const cursos = ["Java Script", "React"];

server.use(express.json())

//middleware Global
server.use((req, res, next)=>{
    console.log(`URL Chamada: ${req.url }`)
    return next();
});

//middleware local
function checkCursoName(req, res, next){
    if (!req.body.name || req.body.name === null){
        return res.status(400).json({ error: "O campo nome do curso é obrigatorio" });
    }

    return next();
}


server.get("/cursos", (req, res) => {
    return res.json(cursos);
});

//usando middleware local
server.post("/cursos", checkCursoName, (req, res)=> {
    const { name } = req.body;
    cursos.push(name);
    
    return res.json(cursos);
});

server.listen(2000);