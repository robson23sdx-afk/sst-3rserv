import { useState } from "react";
import checklistBase from "../data/checklistBase";
import ItemChecklist from "./ItemChecklist";

export default function Checklist() {
  const [itens, setItens] = useState(
    checklistBase.map((i) => ({ ...i, status: "" }))
  );

  function alterarStatus(id, status) {
    setItens(
      itens.map((i) => (i.id === id ? { ...i, status } : i))
    );
  }

  return (
    <div>
      {itens.map((item) => (
        <ItemChecklist
          key={item.id}
          item={item}
          onChange={alterarStatus}
        />
      ))}
    </div>
  );
}
