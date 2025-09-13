const Pagination = ({ next, previous, onPageChange }) => (
  <div className="flex justify-center gap-4 mt-6">
    {previous && (
      <button
        onClick={() => onPageChange(previous)}
        className="px-4 py-2 bg-[#1B1F3B] text-white rounded-lg hover:bg-[#FF6B6B] transition"
      >
        Previous
      </button>
    )}
    {next && (
      <button
        onClick={() => onPageChange(next)}
        className="px-4 py-2 bg-[#1B1F3B] text-white rounded-lg hover:bg-[#FF6B6B] transition"
      >
        Next
      </button>
    )}
  </div>
);

export default Pagination;
