const Sequelize = require('sequelize');
const database = require('../mysql-db');

const AlunoDisciplina = database.define('alunoDisciplina',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = AlunoDisciplina;