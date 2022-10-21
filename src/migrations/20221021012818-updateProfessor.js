'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Professor', 'nomeInstituicao', {
        type: Sequelize.STRING,
        allowNull: false,
      })
    await queryInterface.addColumn('Professor', 'celular', {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn('Professor', 'municipio', {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn('Professor', 'dataDeNascimento', {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn('Professor', 'sexo', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Professor');  
  }
};
