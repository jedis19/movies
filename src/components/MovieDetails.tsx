import { useNavigate } from 'react-router-dom';
import { IMovieDetails } from '../types';

interface MovieDetailsProps {
  movie: IMovieDetails;
}
export default function MovieDetails({ movie }: MovieDetailsProps) {
  const navigate = useNavigate();

  const renderedGenres = movie.Genre.split(', ').map((genre) => {
    return <p className='text-md' key={genre}>{genre}</p>;
  });

  const renderedActors = movie.Actors.split(', ').map((actor) => {
    return <p className='text-md' key={actor}>{actor}</p>;
  });

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className='px-3 py-1.5 bg-sky-500 text-white border flex items-center'
      >
        Go Back
      </button>
      <div className='flex flex-row items-start'>
        <div className='flex flex-col justify-between w-1/4'>
          <div className='mr-5'>
            <h1 className='text-lg font-bold'>{movie.imdbRating} / 10</h1>
          </div>
          <div>
            <h1 className='text-xl font-bold'>Genre</h1>
            {renderedGenres}
          </div>
          <div>
            <h1 className='text-xl font-bold'>Director</h1>
            <p className='text-md'> {movie.Director} </p>
          </div>
          <div>
            <h1 className='text-xl font-bold'>Cast</h1>
            {renderedActors}
          </div>
        </div>
        <div className='flex flex-col justify-between w-1/2'>
          <h1 className='text-3xl font-bold'>{movie.Title}</h1>
          <h1 className='text-xl font-bold'>{movie.Runtime}</h1>
          <h1 className='text-xl font-bold break-words'>{movie.Plot}</h1>
        </div>
        <div className='w-1/4 flex justify-end'>
          <img width='300' height='300' alt='movie poster' src={movie.Poster} />
        </div>
      </div>
    </div>
  );
}
