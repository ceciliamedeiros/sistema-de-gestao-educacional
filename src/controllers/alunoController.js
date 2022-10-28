const Aluno = require('../models/aluno');
const Professor = require('../models/professor');
const { body, validationResult } = require('express-validator');

module.exports = {
    async obterAlunos(req, res){
        const alunos = await Aluno.findAll();

        return res.json(alunos);
    }
    ,
    async criarAluno(req, res) {
        console.log(req.body)
        const { nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo } = req.body;

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const cpfvalidator = await Aluno.findOne({ where: { cpf: cpf || null} });
        if(cpfvalidator){
            return res.status(400).json({error: 'Este CPF já foi cadastrado por outro aluno'});
        }
            
        const cpfvalidatorFromOtherTable = await Professor.findOne({ where: { cpf: cpf || null} });
        if(cpfvalidatorFromOtherTable){
            return res.status(400).json({error: 'Este CPF foi cadastrado por um professor'});
        }
        

        const aluno = await Aluno.create({ nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo})

        return res.json(aluno);
    }
};