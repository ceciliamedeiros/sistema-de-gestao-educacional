module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professores', {
        nome: DataTypes.STRING,
        cpf:DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING
    });

    Professor.associate = (models) => {
        Professor.belongsToMany(models.Aluno, {
            through: 'professorAluno',
            as: 'alunos',
            foreignKey: 'ProfessorId'
        });
    }

    Professor.associate = (models) => {
        Professor.hasMany(models.Disciplina, {
            foreignKey: 'ProfessorId'
        });
    };

    return Professor;
};