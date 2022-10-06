const configuration = require('./config');
const Sequelize = require('sequelize');

var config =
{
    host: configuration.db.host,
    user: configuration.db.user,
    password: configuration.db.password,
    name: configuration.db.name,
    port: configuration.db.port,
    database: configuration.db.database
};

const sequelize = new Sequelize(config.name, config.user, config.password, {
    dialect: config.database,
    host: config.host,
    port: config.port
});

module.exports = sequelize;