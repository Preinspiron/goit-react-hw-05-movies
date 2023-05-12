import { useEffect, useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import { createContext } from 'react';

const MovieData = createContext(222);

export const MovieClient = () => useContext(MovieData);

export const Tranding = () => {
  const [data, setData] = useState([]);
  const ref = useRef(data);
  console.log(ref);
  useEffect(() => {
    axios('day')
      .then(r => r.data.results)
      .then(setData);
  }, []);
  MovieClient();
  return (
    <MovieData.Provider value>
      <ul>
        {data.map(el => (
          <li key={el.id}>
            <Link to={`movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </MovieData.Provider>
  );
};
