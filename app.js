const express = require("express");
const app = express();
const musicController = require("./controllers/musicController");

// EJS engine configuration
app.set("view engine", "ejs");
//Allow using routes for static files
app.use("/Music", express.static(__dirname + "/Music"));

// Middleware for processing requests
app.use(express.urlencoded({ extended: true }));

// main route
app.use("/", musicController);

// Start Server
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
