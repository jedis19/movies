import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovieDetails, IMovieQuery, SearchParams } from '../../types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.omdbapi.com/',
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query<IMovieQuery, SearchParams>({
      query: (p) => ({
        url: '/',
        method: 'GET',
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          s: p.searchTerm,
          type: p.type,
          y: p.year,
          page: p.currentPage,
        },
      }),
    }),
    fetchMovieDetails: builder.query<IMovieDetails, string>({
      query: (p) => ({
        url: '/',
        method: 'GET',
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          i: p,
        },
      }),
    }),
  }),
});

export const { useFetchMoviesQuery, useFetchMovieDetailsQuery } = moviesApi;
