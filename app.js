

(async () => {

  const database = require('./mysql-db');
  const Professor = require('./models/professor');
  const Disciplina = require('./models/disciplina');
  const Aluno = require('./models/aluno');
  await database.sync({force:true});
})();