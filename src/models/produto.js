const Sequelize = require('sequelize');
 
const sequelize = require('../database/database.js');
 
const Produto = sequelize.define("produto", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    preco: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
        validate: {
            len: [1, 999999]
        }
    },
    qtdEstoque: {
        allowNull: false,
        type: Sequelize.INTEGER
    }
});
 
module.exports = Produto;