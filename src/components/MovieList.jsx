import Movie from "./Movie";

function MovieList({ movies }) {
  return (
    <div className="pt-10 px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      ))}
    </div>
  );
}

export default MovieList;
