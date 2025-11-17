import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import movie from "./Models/movies.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/api-movies");

app.get("/filmes", async (req, res) => {
  try {
    const movies = await movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
});

app.post("/filmes", async (req, res) => {
  try {
    const novoFilme = await movie.create(req.body);
    res.status(201).json(novoFilme);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao cadastrar filme." });
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
