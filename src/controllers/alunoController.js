const Aluno = require('../models/aluno');
const Professor = require('../models/professor');

module.exports = {
    async obterAlunos(req, res){
        const alunos = await Aluno.findAll();

        return res.json(alunos);
    }
    ,
    async criarAluno(req, res) {
        console.log(req.body)
        const { nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo } = req.body;

        const cpfvalidator = await Aluno.findOne({ where: { cpf: cpf } });
        if(cpfvalidator){
            return res.status(400).json({error: 'Este CPF já foi inserido por um aluno'});
        }else{
            cpfvalidator = await Professor.findOne({ where: { cpf: cpf } });
            if(cpfvalidator){
                return res.status(400).json({error: 'Este CPF já foi inserido por um professor'});
            }
        }

        const aluno = await Aluno.create({ nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo})

        return res.json(aluno);
    }
};