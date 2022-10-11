module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('Alunos', {
        nome: DataTypes.STRING,
        cpf:DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING
    });

    Aluno.associate = (models) => {
        Aluno.belongsToMany(models.Professor, {
            through: 'professorAluno',
            as: 'professores',
            foreignKey: 'AlunoId'
        });
    }

    Aluno.associate = (models) => {
        Aluno.belongsToMany(models.Disciplina, {
            through: 'alunoDisciplina',
            as: 'disciplinas',
            foreignKey: 'AlunoId'
        });
    }

    return Aluno;
};