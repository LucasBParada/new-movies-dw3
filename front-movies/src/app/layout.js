import "./globals.css";

export const metadata = {
  title: "minecraft movie api",
};

export default function rootlayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className="antialiased"
        style={{
          backgroundColor: "#5a3e1b",
          color: "#ffffff",
          fontFamily: "Minecraft, Arial, sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* barra superior */}
        <header
          style={{
            width: "100%",
            padding: "20px",
            backgroundColor: "#3f9b2b",
            borderBottom: "6px solid #2a5b1e",
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            textShadow: "4px 4px #1a3613",
            fontFamily: "Minecraft, sans-serif",
          }}
        >
          movie - api
        </header>

        <main style={{ padding: "40px" }}>
          {children}
        </main>

        {/* rodapé */}
        <footer
          style={{
            marginTop: "40px",
            padding: "15px",
            textAlign: "center",
            backgroundColor: "#3f9b2b",
            borderTop: "6px solid #2a5b1e",
            fontFamily: "Minecraft, sans-serif",
            fontWeight: "bold",
          }}
        >
          fatec registro - 2025
        </footer>
      </body>
    </html>
  );
}
