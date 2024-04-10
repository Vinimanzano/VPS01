const con = require('../connect/connect');
const read = (req, res) => {
    con.query('SELECT * FROM Veiculo', (err, result) => {
        err ? res.status(500).json(err) : res.status(200).json(result);
    });
};

const create = (req, res) => {
    const { placa, marca, modelo, tipo, diaria } = req.body;

    con.query('INSERT INTO Veiculo (placa, marca, modelo, tipo, diaria) VALUES (?, ?, ?, ?, ?)', [placa, marca, modelo, tipo, diaria], (err, result) => {
        err ? res.status(500).json(err) : res.status(200).json(result);
    });
};

const update = (req, res) => {
    const { placa } = req.params;
    const { marca, modelo, tipo, diaria } = req.body;

    con.query('UPDATE Veiculo SET placa = ?, marca = ?, modelo = ?, tipo = ?, diaria = ? WHERE placa = ?', [placa, marca, modelo, tipo, diaria, placa], (err, result) => {
        err ? res.status(500).json(err) : res.status(200).json(result);
    });
};

const del = (req, res) => {
    const { placa } = req.params;

    con.query('DELETE FROM Veiculo WHERE placa = ?', [placa], (err, result) => {
        err ? res.status(500).json(err) : res.status(200).json(result);
    });
};

module.exports = {
    create,
    read,
    update,
    del
};