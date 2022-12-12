const { DataTypes } = require("sequelize");
const sequelize = require('../db.js')

const blogs = sequelize.define('blog', {
    tittle: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
})

module.exports = blogs;

