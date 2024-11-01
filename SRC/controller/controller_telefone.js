const { put } = require('../routes');

const con = require('../connect/banco').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let tipo = req.body.tipo;
    let query = 'INSERT INTO telefone (cliente_id, numero, tipo) VALUES';
    query += ('${cliente_id}','${numero}', '${tipo}');
    con.query(query, (err, result) => {
        if(err){
            res.status(500).json(err);
        } else{
            res.status(201).json(result);
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if(err){
            res.status(500).json(err);
        } else{
            res.status(201).json(result);
        }
    });
};

const update = (req, res) => {
    let id = req.body.id;
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let tipo = req.body.tipo;
    let query = UPDATE `telefone SET numero='${numero}', tipo='${tipo}' WHERE telefone_id=${id}`;
    con.query(query, (err, result) => {
        if(err){
            res.status(500).json(err);
        } else{
            res.status(201).json(result);
        }
    });
};

const deletar = (req, res) => {
    let id = Number(req.params.id);
    con.query(`DELETE FROM telefone WHERE telefone_id = ${id}`, (err, result) => {
        if(err){
            res.status(500).json(err);
        } else{
            res.status(201).json(result);
        }
    });
};

module.exports = {
    create,
    read,
    update,
    deletar
};