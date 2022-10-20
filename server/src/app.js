const express = require('express');
const routes = require('./routes');

require('./database/mysql-db');

const app = express()

app.use(function (req, res, next) {

    
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.json());
app.use(routes);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(5000, () => console.log(`Example app listening on port 5000!`))
