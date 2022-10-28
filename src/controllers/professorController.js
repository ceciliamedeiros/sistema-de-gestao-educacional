const Professor = require('../models/professor');
const Aluno = require('../models/aluno');
const { body, validationResult } = require('express-validator');

module.exports = {
    async obterProfessores(req, res){
        const professores = await Professor.findAll();

        return res.json(professores);
    }
    ,
    async criarProf(req, res) {
        console.log(req.body)
        const { nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo } = req.body;

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const cpfvalidator = await Professor.findOne({ where: { cpf: cpf} });
        if(cpfvalidator){
            return res.status(400).json({error: 'Este CPF já foi cadastrado por outro professor'});
            
        }
            
        const cpfvalidatorFromOtherTable = await Aluno.findOne({ where: { cpf: cpf || null} });
        if(cpfvalidatorFromOtherTable){
            return res.status(400).json({error: 'Este CPF já foi cadastrado por um aluno'});
        }
        

        const professor = await Professor.create({ nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo})

        return res.json(professor);
    }
};