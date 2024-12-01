import { useNavigate } from 'react-router-dom';
import { IMovie } from '../types';

interface MoviesTableProps {
  movies: IMovie[];
}

const headers = ['Name', 'Release Date', 'IMDB ID'];

export default function MoviesTable({ movies }: MoviesTableProps) {
  const navigate = useNavigate();

  const handleMovieClick = (imdbId: string) => {
    navigate(`/movie/${imdbId}`);
  };

  const renderdHeaders = headers.map((header) => {
    return <th key={header}>{header}</th>;
  });

  let renderedMovies;

  if (movies.length > 0) {
    renderedMovies = movies.map((movie, index) => {
      return (
        <tr
          className={`border cursor-pointer border-black hover:bg-gray-500 ${
            index % 2 === 0 ? 'bg-white' : 'bg-sky-300'
          }`}
          key={movie.imdbID}
          onClick={() => handleMovieClick(movie.imdbID)}
        >
          <td className='p-1.5'>{movie.Title}</td>
          <td>{movie.Year}</td>
          <td>{movie.imdbID}</td>
        </tr>
      );
    });
  } else {
    renderedMovies = (
      <tr className='border border-black hover:bg-gray-500 bg-white'>
        <td colSpan={headers.length} className='p-1.5 text-center'>
          No data found...
        </td>
      </tr>
    );
  }

  return (
    <div>
      <table className='w-full text-left'>
        <thead className='text-xl font-bold'>
          <tr>{renderdHeaders}</tr>
        </thead>
        <tbody>{renderedMovies}</tbody>
      </table>
    </div>
  );
}
