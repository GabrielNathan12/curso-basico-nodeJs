const express = require('express');
const {v4: uuidv4} = require('uuid');

const app = express();


app.use(express.json());

require('dotenv').config();

const oracledb = require('oracledb');

async function connectToDatabase() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_HOST + '/' + process.env.DB_DATABASE,
    });

    console.log('Conexão com o banco de dados Oracle estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados Oracle:', error);
  }
}

connectToDatabase();


//console.log(connection);

/*
const projects = [];

app.get('/projects', function(req, res){
    return res.json(projects);
});

app.post('/projects', function(req, res){    
    const {name, owner} = req.body;
    const projet = {
        id: uuidv4(),
        name, 
        owner
    };

    projects.push(projet);

    return res.status(201).json(projet);
});

app.put('/projects/:id', function(req, res){
    const {id} = req.params;
    const {name, owner} = req.body;

    const projet = projects.findIndex(p => p.id === id);

    if(projet < 0){
        return res.status(404).json({error: "Project not found"});
    }

    if(!name || !owner){
        return res.status(404).json({error: "Name and owner are require"});
    }

    const pro = {id,name, owner};

    projects[projet] = pro;

    return res.json(projects);
});

app.delete('/projects/:id', function(req, res){
    return res.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.listen(3000, () => {
    console.log('Serve online http://localhost:3000/');
});

//node .\src\index.js
*/