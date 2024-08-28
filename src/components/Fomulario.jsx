import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  apellido: yup.string().required("El apellido es obligatorio"),
  github: yup
    .string()
    .url("El GitHub debe ser una URL válida")
    .required("El GitHub es obligatorio"),
});

function Formulario({ addKoder }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    addKoder(data); // Aquí llamas a la función pasada como prop
    reset(); // Reseteas el formulario después de enviar
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-2 border-black shadow text-center flex flex-col gap-2 p-2 max-h-full justify-center h-3/5 rounded bg-slate-950"
    >
      <h1>Registrate dentro de la comunidad de Koders</h1>
      <div>
        <input
          type="text"
          {...register("nombre")}
          className={clsx("input", errors.nombre && "border-red-500")}
          placeholder="Pon tu nombre"
        />
        <p className="text-red-500">{errors.nombre?.message}</p>
      </div>

      <div>
        <input
          type="text"
          {...register("apellido")}
          className={clsx("input", errors.apellido && "border-red-500")}
          placeholder="Pon tu apellido"
        />
        <p className="text-red-500">{errors.apellido?.message}</p>
      </div>

      <div>
        <input
          type="text"
          {...register("github")}
          className={clsx("input", errors.github && "border-red-500")}
          placeholder="Pon el link de tu GitHub"
        />
        <p className="text-red-500">{errors.github?.message}</p>
      </div>

      <button type="submit" className="btn-primary">
        Postear
      </button>
    </form>
  );
}

export default Formulario;
