import { useState } from "react";
import Formulario from "./components/Fomulario.jsx";
import Tarjetas from "./components/Tarjetas.jsx";

export default function App() {
  const [koders, setKoders] = useState([]);

  const addKoder = (koder) => {
    setKoders([...koders, koder]);
  };

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-4 p-4 flex items-center">
        <Formulario addKoder={addKoder} />
      </div>
      <div className="col-span-8 p-4">
        <Tarjetas koders={koders} />
      </div>
    </div>
  );
}
