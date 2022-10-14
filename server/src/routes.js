const express = require('express');

const disciplinaController = require('./controllers/disciplinaController'); 
const professorController = require('./controllers/professorController'); 
const alunoController = require('./controllers/alunoController'); 

const routes = express.Router();

routes.get('/alunos', alunoController.obterAlunos)
routes.post('/alunos', alunoController.criarAluno)

routes.get('/professores', professorController.obterProfessores)
routes.post('/professores', professorController.criarProf)

routes.get('/disciplinas', disciplinaController.obterDisciplinas)
routes.post('/professores/:professor_id/disciplinas', disciplinaController.criarDisciplina)

module.exports = routes;