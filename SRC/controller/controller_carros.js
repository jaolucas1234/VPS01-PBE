const { put } = require('./controller_telefone');

const con = require('../connect/banco').con;

const create = (req, res) => {
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiculo;
    let data_saida = req.body.data_saida;
    let clientes_id = req.body.clientes_id;


    let query = 'INSERT INTO carros (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, clientes_id ) VALUES'
    query += ( '${marca_veiculo}', '${modelo_veiculo}', '${ano_veiculo}', '${ fabricacao_veiculo}', '${clientes_id}');
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let id = req.params.id;
    let carros_id = req.body.carros_id;
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiculo;
    let cliente_id = req.body.cliente_id;

    let query = UPDATE `carros SET id = '${id}', carros_id = '${carros_id}',  marca_veiculo  = '${marca_veiculo}',  modelo_veiculo  = '${ modelo_veiculo }', ano_veiculo = '${ano_veiculo}', fabricacao_veiculo = '${fabricacao_veiculo}', clientes_id = '${cliente_id}', WHERE carros_id = ${ id }`;

    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = Number(req.params.id);
    con.query = ('DELETE FROM estacionamento WHERE carros_id = ${id}', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    }
    )
}


module.exports = {
    create,
    read,
    update,
    deletar
}