const express = require('express');
const routes = express.Router();

const veiculo = require('../controller/veiculo');
const cliente = require('../controller/cliente');
const telefone = require('../controller/telefone');
const aluguel = require('../controller/aluguel');

routes.get( '/', (req, res) => {  
    return res.status(200).json({ message: 'Server Rodando 🎉👏🙌🙏' });  
});

routes.get('/veiculo', veiculo.read);
routes.post('/veiculo', veiculo.create);
routes.put('/veiculo/:placa', veiculo.update);
routes.delete('/veiculo/:placa', veiculo.del);

routes.get('/cliente', cliente.read);
routes.post('/cliente', cliente.create);
routes.put('/cliente/:cpf', cliente.update);
routes.delete('/cliente/:cpf', cliente.del);

routes.get('/telefone', telefone.read);

routes.get('/aluguel', aluguel.read);
routes.post('/aluguel', aluguel.create);
routes.put('/aluguel/:id', aluguel.update);
routes.delete('/aluguel/:id', aluguel.del);

routes.get('/aluguel/reservados', aluguel.readReservados);
routes.get('/aluguel/alugados', aluguel.readAlugados);
routes.get('/aluguel/relatorio', aluguel.readRelatorio);

module.exports = routes;