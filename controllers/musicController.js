const express = require("express");
const router = express.Router();
const Music = require("../models/music");

// Simulando um banco de dados
const Musica1 = new Music(
  1,
  "Get Ready for this",
  "http://localhost:3000/Music/GetReadyForThis.mp3"
);
const Musica2 = new Music(2, "IRan", "http://localhost:3000/Music/IRan.mp3");
const musics = [Musica1, Musica2];

// Rota para exibir a lista de musicas utilizando o Template Engine
router.get("/", (req, res) => {
  res.render("index_Music", { musics });
});

// Rota para exibir a lista de musicas utilizando o JSON
router.get("/musics", (req, res) => {
  res.json(musics);
});

module.exports = router;
