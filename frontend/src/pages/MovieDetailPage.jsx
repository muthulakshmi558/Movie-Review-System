import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API, { endpoints } from "../api/api";
import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.get(`${endpoints.movies}${id}/`).then(res => setMovie(res.data));
    API.get(`${endpoints.reviews}?search=${id}`).then(res => setReviews(res.data));
  }, [id]);

  return (
    <div>
      <Navbar />
      {movie && (
        <div className="pt-20 px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <img src={movie.poster} alt={movie.title} className="w-80 rounded-lg shadow-lg" />
            <div>
              <h1 className="text-3xl font-bold text-[#1B1F3B]">{movie.title}</h1>
              <p className="text-gray-700 mt-2">{movie.description}</p>
              <p className="mt-2 text-[#4ECDC4]">🎭 {movie.actors}</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#FF6B6B] mt-8">Reviews</h2>
          <div className="grid gap-4 mt-4">
            {reviews.map(r => <ReviewCard key={r.id} review={r} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
