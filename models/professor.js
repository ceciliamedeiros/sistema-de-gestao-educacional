const Sequelize = require('sequelize');
const database = require('../mysql-db');
const Disciplina = require('./disciplina');

const Professor = database.define('professor',{
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
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

Professor.hasMany(Disciplina, {
    foreignKey: 'idProfessor'
})

module.exports = Professor;