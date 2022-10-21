'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.alterTable('Professor', {
      nomeInstituicao: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('Professor');  
  }
};
