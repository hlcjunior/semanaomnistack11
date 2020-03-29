const knex = require('knex');
const configuration = require('../../knexfile');

//Pega a variável ambiente para saber se vai trocar o banco para o de teste
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;