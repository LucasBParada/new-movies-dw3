export default function Card({ filme }) {
  return (
    <div
      className="p-4 rounded-2xl shadow text-white"
      style={{
        backgroundColor: "#2d2d2d",
        border: "4px solid #3f9b2b",
      }}
    >
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Minecraft, sans-serif" }}
      >
        {filme.titulo}
      </h2>

      <p><strong>Ano:</strong> {filme.ano_lancamento}</p>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Diretor:</strong> {filme.diretor}</p>
    </div>
  );
}
