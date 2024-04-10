const con = require('../connect/connect');

const create = (req, res) => {
    const { nome_cliente, cpf, telefone } = req.body;
    con.query('INSERT INTO Cliente (nome_cliente, cpf) VALUES (?, ?)', [nome_cliente, cpf], (err, result) => {
        if(err) {
            if(err.code == 'ER_DUP_ENTRY') {
                res.status(409).json('Ja existe um cliente com esse CPF');
            } else {
                res.status(500).json(err);
            }
        } else {
            res.status(201).json(result);
        }
    });

    if(telefone != null) {
        const sql2 = (`INSERT INTO Telefone (cpf, numero) VALUES (?, ?)`, [cpf, telefone]);
    }
}

const read = (req, res) => {
    const sql = 'SELECT * FROM Cliente';
    con.query(sql, (err, result) => {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

const update = (req, res) => {
    const { cpf } = req.params;
    const { nome_cliente, telefone } = req.body;

    con.query('UPDATE Cliente SET nome_cliente = ?, cpf = ? WHERE cpf = ?', [nome_cliente, cpf, cpf], (err, result) => {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });

    if(telefone != null) {
        con.query('UPDATE Telefone SET numero = ? WHERE cpf = ?', [telefone, cpf]);
    }
};

const del = (req, res) => {
    const { cpf } = req.params;
    
    con.query('DELETE FROM Cliente WHERE cpf = ?', [cpf], (err, result) => {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
}