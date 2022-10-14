const { Model, DataTypes } = require('sequelize')

class Professor extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            cpf:DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Disciplina, {foreignKey: 'professor_id', as: 'disciplinas'})
    }

    static associate(models){
        this.belongsToMany(models.Aluno, {foreignKey: 'professor_id', through: 'professorAluno', as: 'alunos'})
    }
}

module.exports = Professor;
