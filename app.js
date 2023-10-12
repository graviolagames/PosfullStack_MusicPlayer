const express = require("express");
const app = express();
const musicController = require("./controllers/musicController");

// Configuração do template engine EJS
app.set("view engine", "ejs");
//Permite utilizar rotas de arquivos estáticos
app.use("/Music", express.static(__dirname + "/Music"));

// Middleware para processar o corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Rota principal
app.use("/", musicController);

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
