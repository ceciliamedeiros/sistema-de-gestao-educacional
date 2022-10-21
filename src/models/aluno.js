const { Model, DataTypes } = require('sequelize')

class Aluno extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            cpf:DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            nomeInstituicao: DataTypes.STRING,
            celular: DataTypes.STRING,
            municipio: DataTypes.STRING,
            dataDeNascimento: DataTypes.STRING,
            sexo: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsToMany(models.Professor, {foreignKey: 'aluno_id', through: 'professorAluno', as: 'professores'})
    }
    static associate(models){
        this.belongsToMany(models.Disciplina, {foreignKey: 'aluno_id', through: 'disciplinaAluno', as: 'disciplinas'})
    }
}

module.exports = Aluno;
