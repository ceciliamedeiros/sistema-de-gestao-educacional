'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Aluno', 'nomeInstituicao', {
        type: Sequelize.STRING,
        allowNull: false,
      })
    await queryInterface.addColumn('Aluno', 'celular', {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn('Aluno', 'municipio', {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn('Aluno', 'dataDeNascimento', {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn('Aluno', 'sexo', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Aluno');  
  }
};
