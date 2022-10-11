module.exports = (sequelize, DataTypes) => {
    const Disciplina = sequelize.define('Disciplinas', {
        nome: DataTypes.STRING,
        nota: DataTypes.DECIMAL,
        faltas: DataTypes.INTEGER
    });

    Disciplina.associate = (models) => {
        Disciplina.belongsToMany(models.Aluno, {
            through: 'alunoDisciplina',
            as: 'alunos',
            foreignKey: 'DisciplinaId'
        });
    };

    Disciplina.associate = (models) => {
        Disciplina.belongsTo(models.Professor, {
            foreignKey: 'DisciplinaId'
        });
    };

    return Aluno;
};