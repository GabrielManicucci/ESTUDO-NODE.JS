// Criando um servidor com express
const express = require("express")
const UserModel = require('../src/models/user.model')

const app = express()

app.use(express.json());

app.set("view engine", 'ejs')
app.set("views", 'src/views')

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users })
})

// Buscar por todos os usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({})

    res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

// Buscar usuário por id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    return res.status(200).json(user);

  } catch {
    return res.status(500).send(error.message);
  }
})

// Recebe uma requisição de usuário e retorna seus dados
app.post('/users', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
  
});

// recebe uma requisição de edição de usuário, executa e edita o usuário por Id 
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

// recebe uma requisição de deletar usuário por ID, executa e retorna uma resposta
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);

  } catch (error) {
    res.status(500).send(error.message);
  }
})


const port = 8080

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`))
