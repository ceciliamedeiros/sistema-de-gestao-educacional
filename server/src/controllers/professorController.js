const Aluno = require('../models/professor');

module.exports = {
    async obterProfessores(req, res){
        const professores = await Aluno.findAll();

        return res.json(professores);
    }
    ,
    async criarProf(req, res) {
        console.log(req.body)
        const { nome, cpf, email, senha } = req.body;

        const professor = await Aluno.create({ nome, cpf, email, senha})

        return res.json(professor);
    }
};