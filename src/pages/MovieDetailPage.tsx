import { useParams } from 'react-router-dom';
import { useFetchMovieDetailsQuery } from '../store';
import MovieDetails from '../components/MovieDetails';

export default function MovieDetailPage() {
  const { imdbID } = useParams();
  const { data, isError, isFetching } = useFetchMovieDetailsQuery(imdbID || '');
  
  let content;  
  if (isError) {
    content = <p>Error fetching...</p>;
  } else if (isFetching) {
    content = <p>Loading...</p>;
  } else {
    if (data && data.Response !== 'False') {
      content = <MovieDetails movie={data} />;
    } else {
      content = <p>No movie found</p>;
    }
  }
  return <div>{content}</div>;
}
