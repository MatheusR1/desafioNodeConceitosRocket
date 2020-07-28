const express = require('express');

const { json } = require("express");

const app = express();

const port = 5000;


app.use(express.json());


const dbArray = []; // utlizando o array para armazenar os dados. 

// CRUD - CREAT, READ, UPDATE , DELETE

// CREAT 
app.post('/projects', (req, res) => {

    const { id, title } = req.body

    // objeto para guarda os valores do corpo da requisição 
    const project = {
        id,
        title,
        tasks: []
    }

    dbArray.push(project);

    return res.json(dbArray);
})

// READ - lista todos os projetos

app.get('/projects', (req, res) => {
    return res.json(dbArray);
})

// UPDATE

app.put('/projects/:id', (req, res) => {

    const { id } = req.params;

    const { title } = req.body;

    // quero retornar apenas um objeto por isso uso o find no lugar do filter

    const project = dbArray.find(p => id == p.id);

    project.title = title;

   return  res.json(dbArray);
})

app.listen(port, console.log(`server rodando na porta ${port}`));