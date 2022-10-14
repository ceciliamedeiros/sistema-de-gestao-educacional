const express = require('express');
const routes = require('./routes');

require('./database/mysql-db');

const app = express()
app.use(express.json());
app.use(routes);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(5000, () => console.log(`Example app listening on port 5000!`))
