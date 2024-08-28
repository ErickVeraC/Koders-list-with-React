import { useState } from "react";
import Formulario from "./components/Fomulario.jsx";
import Tarjetas from "./components/Tarjetas.jsx";

export default function App() {
  const [koders, setKoders] = useState([]);

  const addKoder = (koder) => {
    setKoders([...koders, koder]);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4">
        <Formulario addKoder={addKoder} />
      </div>
      <div className="w-2/3 p-4">
        <Tarjetas koders={koders} />
      </div>
    </div>
  );
}
