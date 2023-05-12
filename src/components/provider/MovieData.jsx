import { createContext, useContext } from 'react';

const MovieProvider = createContext();
export const MovieClient = () => useContext(MovieProvider);

export const MovieData = ({ children }) => {
  <MovieProvider>{children}</MovieProvider>;
};
