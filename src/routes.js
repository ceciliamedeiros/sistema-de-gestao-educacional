const express = require('express');

const disciplinaController = require('./controllers/disciplinaController'); 
const professorController = require('./controllers/professorController'); 
const alunoController = require('./controllers/alunoController'); 

const { body, validationResult } = require('express-validator');

const routes = express.Router();

routes.get('/alunos', alunoController.obterAlunos)
routes.post('/alunos',[
    body("email").isEmail().withMessage("Insira um e-mail válido"), 
    body("senha").isStrongPassword().withMessage("Sua senha precisa de um mínimo de 8 caracteres, contendo ao menos uma letra maiúscula,"+
     " uma minúscula, um número e um caractere especial"),
    body("cpf").isTaxID('pt-BR').withMessage("Insira um CPF válido, apenas com os números"),
    body("dataDeNascimento").isDate().withMessage("Insira uma data válida, no formato: YYYY/MM/DD"),
    body("celular").isMobilePhone('pt-BR').withMessage("Insira um número de celular válido"),
    body("nome").exists({checkFalsy: true}).isLength({min: 3}).withMessage("Insira ao menos o primeiro nome"),
    body("nomeInstituicao").exists({checkFalsy: true}).withMessage("Este campo não pode conter um valor nulo"),
    body("municipio").exists({checkFalsy: true}).withMessage("Este campo não pode conter um valor nulo"),
    body("sexo").exists({checkFalsy: true}).withMessage("Este campo não pode conter um valor nulo")]
    , alunoController.criarAluno)

routes.get('/professores', professorController.obterProfessores)
routes.post('/professores',[
    body("email").isEmail().withMessage("Insira um e-mail válido"), 
    body("senha").isStrongPassword().withMessage("Sua senha precisa de um mínimo de 8 caracteres, contendo ao menos uma letra maiúscula,"+ 
    " uma minúscula, um número e um caractere especial"),
    body("cpf").isTaxID('pt-BR').withMessage("Insira um CPF válido, apenas com os números"),
    body("dataDeNascimento").isDate().withMessage("Insira uma data válida, no formato: YYYY/MM/DD"),
    body("celular").isMobilePhone('pt-BR').withMessage("Insira um número de celular válido"),
    body("nome").exists({checkFalsy: true}).isLength({min: 3}).withMessage("Insira ao menos o primeiro nome"),
    body("nomeInstituicao").exists({checkFalsy: true}).withMessage("Este campo não pode conter um valor nulo"),
    body("municipio").exists({checkFalsy: true}).withMessage("Este campo não pode conter um valor nulo"),
    body("sexo").exists({checkFalsy: true}).withMessage("Este campo não pode conter um valor nulo")]
    , professorController.criarProf)

routes.get('/disciplinas', disciplinaController.obterDisciplinas)
routes.post('/professores/:professor_id/disciplinas', disciplinaController.criarDisciplina)

module.exports = routes;