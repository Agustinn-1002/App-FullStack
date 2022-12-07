const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/app_fullstack');


module.exports = sequelize;