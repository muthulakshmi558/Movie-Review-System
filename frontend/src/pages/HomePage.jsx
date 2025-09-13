import { useEffect, useState } from "react";
import API, { endpoints } from "../api/api";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

const HomePage = ({ navigate }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const loadMovies = async (url = endpoints.movies) => {
    const res = await API.get(url);
    setMovies(res.data.results || res.data);
    setNext(res.data.next);
    setPrevious(res.data.previous);
  };

  useEffect(() => {
    loadMovies();
    API.get(endpoints.genres).then(res => setGenres(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pt-20 px-6 max-w-7xl mx-auto">
        <FilterBar
          genres={genres}
          onFilter={(id) => loadMovies(`${endpoints.movies}?genre=${id}`)}
          onSearch={(q) => loadMovies(`${endpoints.movies}?search=${q}`)}
          onSort={(s) => loadMovies(`${endpoints.reviews}?ordering=${s}`)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(m => (
            <MovieCard key={m.id} movie={m} onClick={() => navigate(`/movies/${m.id}`)} />
          ))}
        </div>
        <Pagination next={next} previous={previous} onPageChange={loadMovies} />
      </div>
    </div>
  );
};

export default HomePage;
