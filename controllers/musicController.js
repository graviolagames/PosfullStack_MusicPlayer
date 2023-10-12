const express = require("express");
const router = express.Router();
const Music = require("../models/music");

// Simulando um banco de dados
const musics = [
  new Music(
    1,
    "Get Ready for this",
    "GetReadyForThis.mp3"
  ),
  new Music(
    2, 
    "IRan", 
    "IRan.mp3"
  )
];

// Rota para exibir a página do player
router.get("/", (req, res) => {
  res.render("index");
});

// API - Rota para recuperar as músicas
router.get("/musics", (req, res) => {
  res.status(200).json(musics);
});

module.exports = router;
