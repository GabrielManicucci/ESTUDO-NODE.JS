const fs = require("fs")
const path = require("path")

// criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Error:", error)
  }

  console.log("Pasta criada com sucesso")
})

// Criar um aequivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  error => {
    if (error) {
      return console.log("Erro:", error)
    }

    console.log("Arquivo criado com sucesso")
  }
),

// Adicionar conteúdo à um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hellow World!",
  (error) => {
    if (error) {
      return console.log("Error:", error)
    }

    console.log("Arquivo adicionado com sucesso")
  }
)

// Ler arquivo 
fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (error, data) => {
  if (error) {
    return console.log("Error:", error)
  }

  console.log(data)
})
