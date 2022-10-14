const Disciplina = require('../models/disciplina');
const Professor = require('../models/professor');

module.exports = {

    async obterDisciplinas(req, res){
        const disciplinas = await Disciplina.findAll();

        return res.json(disciplinas);
    }
    ,
    async criarDisciplina(req, res) {
        const {professor_id} = req.params;
        const { nome, nota, faltas } = req.body;

        const professor = await Professor.findByPk(professor_id);

        if (!professor)
            return res.status(400).json({error: 'Professor não encontrado!'});

        const disciplina = await Disciplina.create({ nome, nota, faltas, professor_id})

        return res.json(disciplina);
    }
};