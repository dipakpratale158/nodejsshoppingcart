
const Sequelize = require("sequelize")
const sequelize = new Sequelize('nodecomplete', 'root', 'Dipak@12345', {
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = sequelize



//go to mysql rightclick node-complete refreshall