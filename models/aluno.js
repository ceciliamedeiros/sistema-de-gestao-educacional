const Sequelize = require('sequelize');
const database = require('../mysql-db');
const Professor = require('./professor');
const ProfessorAluno = require('./professorAluno');
const Disciplina = require('./disciplina');
const AlunoDisciplina = require('./alunoDisciplina');

const Aluno = database.define('aluno',{
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

Aluno.belongsToMany(Professor, {
    through: {
        model: ProfessorAluno
    },
    foreignKey: 'idProfessor',
    constraint: true
})

Professor.belongsToMany(Aluno, {
    through: {
        model: ProfessorAluno
    },
    foreignKey: 'idAluno',
    constraint: true
})

Aluno.belongsToMany(Disciplina, {
    through: {
        model: AlunoDisciplina
    },
    foreignKey: 'idDisciplina',
    constraint: true
})

Disciplina.belongsToMany(Aluno, {
    through: {
        model: AlunoDisciplina
    },
    foreignKey: 'idAluno',
    constraint: true
})

module.exports = Aluno;