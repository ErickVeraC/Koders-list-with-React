function Tarjetas({ koders }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {koders.map((profile, index) => (
        <div
          key={index}
          className="p-4 border border-black rounded shadow-md shadow-black bg-[#FF7251] text-[#373635] h-24"
        >
          <div className="grid grid-cols-12 gap-4 items-center">
            <img
              src={`${profile.github}.png`}
              alt={`${profile.nombre} ${profile.apellido}`}
              className="col-span-2 w-16 h-16 rounded-full"
            />
            <div className="col-span-9">
              <h2 className="text-2xl font-bold">
                {profile.nombre} {profile.apellido}
              </h2>
              <a
                href={`https://github.com/${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                {profile.github}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tarjetas;
