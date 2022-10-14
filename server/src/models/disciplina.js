const { Model, DataTypes } = require('sequelize')

class Disciplina extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            nota: DataTypes.DECIMAL,
            faltas: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Professor, {foreignKey: 'professor_id', as: 'professor'})
    }
    static associate(models){
        this.belongsToMany(models.Aluno, {foreignKey: 'disciplina_id', through: 'disciplinaAluno', as: 'alunos'})
    }
}

module.exports = Disciplina;
