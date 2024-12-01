import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage';
import MovieDetailPage from './pages/MovieDetailPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MovieListPage />} />
        <Route path='/movie/:imdbID' element={<MovieDetailPage />} />
        <Route path='*' element={<MovieListPage />} />
      </Routes>
    </Router>
  );
}
