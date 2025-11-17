"use client";

import { useEffect, useState } from "react";
import Form from "./form";
import Lista from "./lista";

export default function Page() {
  const [movies, setMovies] = useState([]);

  async function carregarFilmes() {
    try {
      const res = await fetch("http://localhost:4000/filmes");
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Erro ao carregar filmes:", error);
    }
  }

  useEffect(() => {
    carregarFilmes();
  }, []);

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "#5a3e1b" }}>
      <h1
        className="text-4xl font-bold mb-6 text-center"
        style={{
          fontFamily: "Minecraft, sans-serif",
          color: "#3f9b2b",
          textShadow: "3px 3px #2a5b1e",
        }}
      >
        minecraft movie api
      </h1>

      <Form atualizarLista={carregarFilmes} />

      <Lista movies={movies} />
    </div>
  );
}
