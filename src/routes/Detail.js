import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import DetailSkeleton from "../components/DetailSkeleton";


function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
  
    const getMovie = async () => {
      const json = await (await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )).json();
      setMovie(json.data.movie);
    };
  
    useEffect(() => {
      getMovie();
    }, [id]);
  
    return (
      <div className="bg-black min-h-screen text-white p-6">
        {movie ? (
          <div className="flex flex-col items-center">
            <img
              src={movie.large_cover_image}
              alt={movie.title}
              className="w-1/2 rounded-lg shadow-lg"
            />
            <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
            <p className="text-gray-300 mt-4 max-w-xl text-center">
              {movie.description_full.slice(0, 200)}...
            </p>
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
              {movie.genres.map((g) => (
                <span
                  key={g}
                  className="bg-red-600 px-2 py-1 rounded text-sm"
                >
                  #{g}
                </span>
              ))}
            </div>
          </div>
        ) : (
            <DetailSkeleton />
        )}
      </div>
    );
  }
  
  export default Detail;