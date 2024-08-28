function Tarjetas({ koders }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {koders.map((profile, index) => (
        <div key={index} className="p-4 border rounded shadow-md">
          <img
            src={`${profile.github}.png`}
            alt={`${profile.nombre} ${profile.apellido}`}
            className="w-16 h-16 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">
            {profile.nombre} {profile.apellido}
          </h2>
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {profile.github}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Tarjetas;
