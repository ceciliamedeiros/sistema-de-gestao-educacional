const Professor = require('../models/professor');
const Aluno = require('../models/aluno');

module.exports = {
    async obterProfessores(req, res){
        const professores = await Professor.findAll();

        return res.json(professores);
    }
    ,
    async criarProf(req, res) {
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

        const professor = await Professor.create({ nome, cpf, email, senha, nomeInstituicao, celular, municipio, dataDeNascimento, sexo})

        return res.json(professor);
    }
};