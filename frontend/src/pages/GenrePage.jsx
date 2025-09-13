import { useEffect, useState } from "react";
import API, { endpoints } from "../api/api";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const GenrePage = ({ navigate }) => {
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.get(endpoints.genres).then(res => setGenres(res.data));
  }, []);

  const loadMovies = async (id) => {
    setSelected(id);
    const res = await API.get(`${endpoints.movies}?genre=${id}`);
    setMovies(res.data.results || res.data);
  };

  return (
    <div>
      <Navbar />
      <div className="pt-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#1B1F3B]">Genres</h1>
        <div className="flex gap-4 flex-wrap mb-6">
          {genres.map(g => (
            <button
              key={g.id}
              onClick={() => loadMovies(g.id)}
              className={`px-4 py-2 rounded-lg shadow ${
                selected === g.id ? "bg-[#FF6B6B] text-white" : "bg-white text-[#1B1F3B]"
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(m => (
            <MovieCard key={m.id} movie={m} onClick={() => navigate(`/movies/${m.id}`)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
