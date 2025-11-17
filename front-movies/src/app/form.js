"use client";

import { useState } from "react";

export default function Form({ atualizarLista }) {
  const [form, setForm] = useState({
    titulo: "",
    ano_lancamento: "",
    genero: "",
    diretor: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function addMovie() {
    if (!form.titulo || !form.ano_lancamento || !form.genero || !form.diretor)
      return;

    try {
      const res = await fetch("http://localhost:4000/filmes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        console.error("Erro ao adicionar filme");
        return;
      }

      setForm({
        titulo: "",
        ano_lancamento: "",
        genero: "",
        diretor: "",
      });

      atualizarLista();
    } catch (error) {
      console.error("Erro ao enviar filme:", error);
    }
  }

  return (
    <div
      className="p-6 rounded-2xl shadow mb-8 grid grid-cols-1 gap-4 md:grid-cols-4"
      style={{
        backgroundColor: "#2d2d2d",
        border: "4px solid #3f9b2b",
        boxShadow: "0 0 15px #000",
      }}
    >
      <input
        name="titulo"
        placeholder="Título"
        className="p-3 border rounded-xl bg-[#4c4c4c] text-white"
        value={form.titulo}
        onChange={handleChange}
      />

      <input
        name="ano_lancamento"
        placeholder="Ano de Lançamento"
        className="p-3 border rounded-xl bg-[#4c4c4c] text-white"
        value={form.ano_lancamento}
        onChange={handleChange}
      />

      <input
        name="genero"
        placeholder="Gênero"
        className="p-3 border rounded-xl bg-[#4c4c4c] text-white"
        value={form.genero}
        onChange={handleChange}
      />

      <input
        name="diretor"
        placeholder="Diretor"
        className="p-3 border rounded-xl bg-[#4c4c4c] text-white"
        value={form.diretor}
        onChange={handleChange}
      />

      <button
        onClick={addMovie}
        className="md:col-span-4 p-3 rounded-xl text-white font-bold"
        style={{
          backgroundColor: "#3f9b2b",
          border: "3px solid #2a5b1e",
          boxShadow: "3px 3px #1a3613",
        }}
      >
        + Adicionar Filme
      </button>
    </div>
  );
}
