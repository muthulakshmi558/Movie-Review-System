import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import GenrePage from "./pages/GenrePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithNav Component={HomePage} />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/genres" element={<WithNav Component={GenrePage} />} />
      </Routes>
    </Router>
  );
}

// Wrapper to pass navigate prop
function WithNav({ Component }) {
  const navigate = useNavigate();
  return <Component navigate={navigate} />;
}

export default App;
