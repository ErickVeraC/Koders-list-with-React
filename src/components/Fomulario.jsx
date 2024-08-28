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
    addKoder(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-2 border-black shadow text-center flex flex-col gap-4 p-4 max-h-full justify-center h-3/5 rounded bg-[#373635]"
    >
      <h1 className="py-4 mb-4 text-xl font-bold">
        Registrate dentro de la comunidad de Koders
      </h1>
      <div className="py-2">
        <input
          type="text"
          {...register("nombre")}
          className={clsx("input rounded w-full h-10", {
            "border-red-500 bg-gray-100": errors.nombre,
          })}
          placeholder="Pon tu nombre"
          style={{ color: "#151311" }}
        />
        <p className="text-red-500">{errors.nombre?.message}</p>
      </div>

      <div className="py-2">
        <input
          type="text"
          {...register("apellido")}
          className={clsx("input rounded w-full h-10", {
            "border-red-500 bg-gray-100": errors.apellido,
          })}
          placeholder="Pon tu apellido"
          style={{ color: "#151311" }}
        />
        <p className="text-red-500">{errors.apellido?.message}</p>
      </div>

      <div className="py-2">
        <input
          type="text"
          {...register("github")}
          className={clsx("input rounded w-full h-10", {
            "border-red-500 bg-gray-100": errors.github,
          })}
          placeholder="Pon el link de tu GitHub"
          style={{ color: "#151311" }}
        />
        <p className="text-red-500">{errors.github?.message}</p>
      </div>

      <button
        type="submit"
        className="mt-auto bg-[#FF7251] text-white transition ease-in-out duration-300 hover:bg-white hover:text-[#FF7251] hover:border-[#FF7251] border-2 border-[#FF7251] h-10 w-1/2 py-4 mx-auto rounded flex items-center justify-center"
      >
        Postear
      </button>
    </form>
  );
}

export default Formulario;
