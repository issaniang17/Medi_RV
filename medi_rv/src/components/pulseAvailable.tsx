

const PulseAvailable = () => {
  return (
    <div className="rounded-full py-1 px-2 gap-1 inline-flex justify-center items-center text-white font-semibold tracking-tight border border-white relative w-60">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-15 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></div>
        <p>Disponible au Sénégal</p>
    </div>
  )
}

export default PulseAvailable