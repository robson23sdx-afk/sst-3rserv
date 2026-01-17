export default function ItemChecklist({ item, onChange }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 8 }}>
      <strong>{item.categoria}</strong>
      <p>{item.item}</p>

      <button onClick={() => onChange(item.id, "Conforme")}>Conforme</button>{" "}
      <button onClick={() => onChange(item.id, "Não Conforme")}>
        Não Conforme
      </button>{" "}
      <button onClick={() => onChange(item.id, "N/A")}>N/A</button>

      {item.status && (
        <p>
          <strong>Status:</strong> {item.status}
        </p>
      )}
    </div>
  );
}
