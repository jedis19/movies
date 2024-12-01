import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  moviesApi,
  useFetchMoviesQuery,
  useFetchMovieDetailsQuery,
} from './apis/moviesApi';
import {
  formReducer,
  changeCurrentPage,
  updateSearchParams,
} from './slices/FormsSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { changeCurrentPage, updateSearchParams };
export { useFetchMoviesQuery, useFetchMovieDetailsQuery };
