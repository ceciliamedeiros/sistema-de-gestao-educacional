const Aluno = require('../models/aluno');

module.exports = {
    async obterAlunos(req, res){
        const alunos = await Aluno.findAll();

        return res.json(alunos);
    }
    ,
    async criarAluno(req, res) {
        console.log(req.body)
        const { nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo } = req.body;

        const aluno = await Aluno.create({ nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo})

        return res.json(aluno);
    }
};