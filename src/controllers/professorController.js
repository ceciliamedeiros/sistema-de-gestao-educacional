const Professor = require('../models/professor');

module.exports = {
    async obterProfessores(req, res){
        const professores = await Professor.findAll();

        return res.json(professores);
    }
    ,
    async criarProf(req, res) {
        console.log(req.body)
        const { nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo } = req.body;

        const professor = await Professor.create({ nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo})

        return res.json(professor);
    }
};