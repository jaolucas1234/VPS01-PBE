const express = require('express');
const cors = require('cors');
const routes = require('../VPS01-PBE/SRC/routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(3000,() =>{
    console.log('Servidor rodando na porta 3000');
});