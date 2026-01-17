import { useState } from "react";

export default function App() {
  const [obra, setObra] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>Inspeção SST – 3R SERV</h1>

      <input
        placeholder="Nome da obra"
        value={obra}
        onChange={(e) => setObra(e.target.value)}
      />

      <br /><br />

      <button onClick={() => alert("Relatório gerado!")}>
        Gerar relatório
      </button>
    </div>
  );
}
