import PropTypes from "prop-types" 
import { Link } from "react-router-dom"
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img src={coverImg} alt={title} className="w-full" />
      <div className="p-4 text-white">
        <h2 className="text-lg font-bold">
          <Link to={`/movie/${id}`} className="hover:text-red-500">
            {title}
          </Link>
        </h2>
        <ul className="text-sm mt-2 space-y-1 text-gray-300">
          {genres.map((g) => <li key={g}># {g}</li>)}
        </ul>
      </div>
    </div>
  )
}



Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;
