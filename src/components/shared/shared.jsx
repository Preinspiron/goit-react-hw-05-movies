import { Outlet, NavLink } from 'react-router-dom';
import { useCallback, useRef, useMemo, useState, useEffect } from 'react';
import axios from 'axios';

export const SharedHeader = () => {
  const [list, setList] = useState();

  useEffect(() => {
    axios('day').then(r => setList(() => r));
  }, []);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Outlet context={list} />
    </nav>
  );
};
