const Sequelize = require('sequelize');
const database = require('../mysql-db');

const ProfessorAluno = database.define('professorAluno',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = ProfessorAluno;