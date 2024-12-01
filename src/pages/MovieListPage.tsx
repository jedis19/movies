import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import { RootState, useFetchMoviesQuery } from '../store';
import MoviesSearch from '../components/MoviesSearch';
import Skeleton from '../components/Skeleton';
import MoviesTable from '../components/MoviesTable';

export default function MovieListPage() {
  const { searchTerm, type, year, currentPage } = useSelector(
    (state: RootState) => {
      return state.form;
    }
  );
  const { data, isError, isFetching } = useFetchMoviesQuery({
    searchTerm,
    currentPage,
    type,
    year,
  });

  let movieSearch = (
    <MoviesSearch
      initialSearchTerm={searchTerm}
      initialType={type}
      initialYear={year}
    />
  );

  let content;
  if (isError) {
    content = (
      <div>
        {movieSearch}
        <p className='flex text-3xl mt-20 justify-self-center text-red-600'>
          Error Fetching data...
        </p>
      </div>
    );
  } else if (isFetching) {
    content = <Skeleton repeat={10} />;
  } else {
    if (data && data.Response !== 'False' && data.Search.length > 0) {
      content = (
        <div>
          {movieSearch}
          <MoviesTable movies={data.Search} />
          <div className='flex mt-2 place-self-center'>
            <Pagination totalResultCount={parseInt(data.totalResults)} />
          </div>
        </div>
      );
    } else {
      content = (
        <div>
          {movieSearch}
          <MoviesTable movies={[]} />
          <div className='flex mt-2 place-self-center'>
            <Pagination totalResultCount={0} />
          </div>
        </div>
      );
    }
  }

  return <div>{content}</div>;
}
