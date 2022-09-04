// Node.js é utilzado em módulos, e essa é uma forma de importar um módulo(arquivo) exportado

// const { Person } = require("./person")
const dotenv = require('dotenv') // dotenv é usado para acessar as variáveis de ambiente nos determinados arquivos
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase()

// require("./modules/path")
// require('./modules/fs')
// require("./modules/http")
require("./modules/express")

// const person = new Person('Gabriel')
// console.log(person.sayMyName())