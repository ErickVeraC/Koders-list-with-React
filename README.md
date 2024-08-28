# Lista de Koders

Este proyecto es una aplicación en React que permite agregar perfiles de Koders utilizando un formulario. Los datos se muestran en tiempo real en tarjetas, donde se incluye la imagen de perfil y el enlace a su perfil de GitHub.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **React Hook Form**: Manejo de formularios en React con validación integrada.
- **Yup**: Validación de esquemas para formularios.
- **clsx**: Para manejar clases condicionales en JSX.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y consistentes.
- **Vercel**: Plataforma de hosting para el despliegue del proyecto.

## Funcionamiento

La aplicación consta de dos componentes principales:

1. **Formulario.jsx**: Este componente permite agregar Koders a la lista. Usa React Hook Form para gestionar el estado del formulario y Yup para validar los campos. Cuando se envía el formulario, los datos se agregan al estado global de la aplicación.

2. **Tarjetas.jsx**: Este componente se encarga de mostrar la lista de Koders en forma de tarjetas. Cada tarjeta contiene la imagen del perfil de GitHub, el nombre completo del Koder y un enlace a su perfil de GitHub.

### Ejemplo de Código

```jsx
// App.jsx
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
```

### Despliegue

Puedes ver el proyecto desplegado en Vercel en el siguiente enlace: https://koders-list-with-react.vercel.app/

### Instalación y Uso

Clona este repositorio.
Instala las dependencias con npm install.
Corre la aplicación localmente con npm run dev.
Accede a http://localhost:`${el numero que te asigne tu terminal}` en tu navegador.

### Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir issues y pull requests.
