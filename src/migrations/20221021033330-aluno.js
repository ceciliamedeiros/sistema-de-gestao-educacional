'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Aluno', {
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
      },
      nomeInstituicao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      celular: {
        type: Sequelize.STRING,
        allowNull: false
      },
      municipio: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dataDeNascimento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Aluno');  
  }
};
