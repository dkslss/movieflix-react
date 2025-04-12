function Banner({ movie }) {
    return (
      <section className="relative h-[500px] text-white">
        <img 
          src={movie.background_image} 
          alt={movie.title} 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute bottom-20 left-10">
          <h2 className="text-4xl font-bold">{movie.title}</h2>
          <p className="max-w-xl mt-4 text-gray-300">
            {movie.summary.slice(0, 100)}...
          </p>
          <button className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">
            바로보기
          </button>
        </div>
      </section>
    )
  }
  
  export default Banner;
  