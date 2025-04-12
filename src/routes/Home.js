import { useState, useEffect } from "react";
// import Movie from "../components/Movie";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
import SkeletonList from "../components/SkeletonList";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Header />
      {loading ? (
        <>
          <div className="h-[500px] bg-zinc-800 animate-pulse" />
          <SkeletonList />
        </>
      ) : (
        <>
          <Banner movie={movies[0]} />
          <MovieList movies={movies} />
        </>
      )}
    </div>
  );
}

export default Home;
