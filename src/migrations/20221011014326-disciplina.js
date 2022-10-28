'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Disciplina', {
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
      faltas: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      nota: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      professor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Professor',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Disciplina');  
  }
};
