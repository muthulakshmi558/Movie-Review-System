import { motion } from "framer-motion";

const ReviewCard = ({ review }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#F0F4F8] rounded-xl p-4 shadow-md"
  >
    <h3 className="font-semibold text-[#FF6B6B]">{review.reviewer}</h3>
    <p className="text-gray-700 mt-2">{review.comment}</p>
    <p className="text-sm text-gray-500 mt-1">⭐ {review.rating}/5 | {new Date(review.date).toLocaleDateString()}</p>
  </motion.div>
);

export default ReviewCard;
