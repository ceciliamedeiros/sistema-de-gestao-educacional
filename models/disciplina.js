const Sequelize = require('sequelize');
const database = require('../mysql-db');

const Disciplina = database.define('disciplina',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nota: {
        type: Sequelize.DECIMAL
    },
    faltas: {
        type: Sequelize.INTEGER
    }
})

module.exports = Disciplina;