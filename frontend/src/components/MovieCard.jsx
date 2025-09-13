import { motion } from "framer-motion";

const MovieCard = ({ movie, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer transition duration-300"
    onClick={onClick}
  >
    <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h2 className="text-[#1B1F3B] text-lg font-bold">{movie.title}</h2>
      <p className="text-gray-600 text-sm">{movie.description.slice(0, 80)}...</p>
    </div>
  </motion.div>
);

export default MovieCard;
