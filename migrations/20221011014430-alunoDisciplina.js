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
      AlunoId: {
        type: Sequelize.INTEGER,
        references: { model: 'Alunos', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      DisciplinaId: {
        type: Sequelize.INTEGER,
        references: { model: 'Disciplinas', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('alunoDisciplina');  
  }
};
