'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alunoDisciplina', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Aluno', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      disciplina_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Disciplina', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('alunoDisciplina');  
  }
};
