import { Dropdown } from './Dropdown';
import { IDropdownItem, SearchType } from '../types';
import { useDispatch } from 'react-redux';
import { updateSearchParams } from '../store';
import { createYearArr } from '../utils';
import { useState } from 'react';

const options = [
  { key: 'Movie', value: SearchType.Movie },
  { key: 'Series', value: SearchType.Series },
  { key: 'Episodes', value: SearchType.Episodes },
];

const yearOptions = createYearArr();

export interface MoviesSearchProps {
  initialSearchTerm: string | undefined;
  initialType: SearchType | undefined;
  initialYear: string | undefined;
}

export default function MoviesSearch({
  initialSearchTerm,
  initialType,
  initialYear,
}: MoviesSearchProps) {
  const dispatch = useDispatch();
  const [tempSearchTerm, setTempSearchTerm] = useState(initialSearchTerm || '');
  const [tempType, setTempType] = useState<SearchType>(
    initialType || SearchType.None
  );
  const [tempYear, setTempYear] = useState<string | undefined>(initialYear);

  const changeSelectedType = (option: IDropdownItem) => {
    setTempType(option.value as SearchType);
  };

  const changeSelectedYear = (option: IDropdownItem) => {
    setTempYear(option.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      updateSearchParams({
        searchTerm: tempSearchTerm,
        type: tempType,
        year: tempYear,
        currentPage: 1,
      })
    );
  };

  const handleOnReset = (e: React.FormEvent) => {
    e.preventDefault();
    setTempSearchTerm('');
    setTempType(SearchType.None);
    setTempYear(undefined);
  };

  return (
    <form className='flex' onSubmit={handleOnSubmit}>
      <div className='flex items-center'>
        <label className='mx-1.5'>Title: </label>
        <input
          value={tempSearchTerm}
          onChange={(e) => setTempSearchTerm(e.target.value)}
          className='p-1.5 border border-black'
        />
        <label className='mx-1.5'>Year: </label>
        <Dropdown
          options={yearOptions}
          selectedOption={tempYear}
          changeSelectedOption={changeSelectedYear}
        />
        <label className='mx-1.5'>Type: </label>
        <Dropdown
          options={options}
          selectedOption={tempType}
          changeSelectedOption={changeSelectedType}
        />
        <div className='flex ml-5'>
          <button
            onClick={handleOnSubmit}
            type='submit'
            className='px-3 py-1.5 bg-sky-500 text-white border flex items-center'
          >
            Search
          </button>
          <button
            className='px-3 py-1.5 bg-gray-500 text-white border flex items-center'
            onClick={handleOnReset}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}
