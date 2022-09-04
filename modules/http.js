// módulo servidor
const http = require("http")

// porta usada para acessar url
const port = 8080

// Criar um servidor que recebe um request(req) e devolve uma response(res)

const server = http.createServer((req, res) => {
  
  if (req.url === "/home") {  // define a url como o parâmetro do if
    res.writeHead(200, { "Content-Type": "text/html" }) // define o status code e o tipo conteúdo da porta html, js, json...
    res.end("<h1>home page</h1>") // Determina um conteúdo para a url definida 
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "Gabriel Manicucci",
        email: "gabrielmanicucci@outlook.com"
      },
      {
        name: "Débora",
        email: "débora@mani.com"
      }
    ]

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(users))
  }
})

server.listen(port, () => console.log(`Rodando na porta ${port}!`))
