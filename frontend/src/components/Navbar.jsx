import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1B1F3B] text-white px-6 py-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50"
    >
      <h1 className="text-2xl font-bold">🎬 MovieZone</h1>
      <div className="flex gap-6 text-lg">
        <a href="/" className="hover:text-[#FF6B6B] transition">Home</a>
        <a href="/genres" className="hover:text-[#FF6B6B] transition">Genres</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
