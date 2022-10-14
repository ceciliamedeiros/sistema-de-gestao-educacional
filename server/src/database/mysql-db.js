const configuration = require('../config/config')
const Sequelize = require('sequelize');

const Aluno = require('../models/aluno');
const Professor = require('../models/professor');
const Disciplina = require('../models/disciplina');

const sequelize = new Sequelize(configuration);

Aluno.init(sequelize);
Professor.init(sequelize);
Disciplina.init(sequelize);
Disciplina.associate(sequelize.models);
Professor.associate(sequelize.models);
Disciplina.belongsTo(Professor);
Professor.hasMany(Disciplina);

module.exports = sequelize;