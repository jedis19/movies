export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IMovieQuery {
  Response: string;
  Search: IMovie[];
  totalResults: string;
}

export interface IMovieDetails extends IMovie {
  Rated: string;
  Released: string;
  Plot: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  imdbRating: string;
  Response: string;
}

export enum SearchType {
  Movie = 'movie',
  Series = 'series',
  Episodes = 'episodes',
  None = '',
}

export interface SearchParams {
  searchTerm?: string;
  type?: SearchType;
  year?: string;
  currentPage: number;
}

export interface IDropdownItem {
  key: string;
  value: string;
}
