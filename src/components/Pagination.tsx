import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPage, RootState } from '../store';

export interface PaginationProps {
  totalResultCount: number;
}

const itemsPerPage = 10;
const visiblePageLength = 5;

export default function Pagination({ totalResultCount }: PaginationProps) {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: RootState) => {
    return state.form;
  });

  const totalPages = Math.ceil(totalResultCount / itemsPerPage);
  const startPage = Math.max(
    Math.min(
      currentPage - Math.floor(visiblePageLength / 2),
      totalPages - visiblePageLength + 1
    ),
    1
  );
  const endPage = Math.min(startPage + visiblePageLength - 1, totalPages);

  const handlePageChange = (pageNumber: number) => {
    if (
      pageNumber !== currentPage &&
      pageNumber >= 1 &&
      pageNumber <= totalPages
    ) {
      dispatch(changeCurrentPage(pageNumber));
    }
  };

  const paginationNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    paginationNumbers.push(i);
  }

  let renderedPaginationNumbers = paginationNumbers.map((number) => {
    return (
      <div
        key={number}
        className={`p-2 border cursor-pointer hover:bg-gray-200 ${
          number === currentPage ? 'bg-sky-500' : 'bg-white'
        }`}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </div>
    );
  });

  return (
    <div className='flex'>
      {totalPages > 0 && (
        <div
          className='p-2 border bg-white cursor-pointer hover:bg-gray-200'
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </div>
      )}
      {renderedPaginationNumbers}
      {totalPages > 0 && (
        <div
          className='p-2 border bg-white cursor-pointer hover:bg-gray-200'
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </div>
      )}
    </div>
  );
}
