import {
  useLoaderData,
  useLocation,
  useRouteLoaderData,
  useParams,
  useOutletContext,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Coast = () => {
  const { movieId } = useParams();
  const [fetched, setFetched] = useState();
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${Number(movieId)}/credits`).then(
      r => setFetched(r.data.cast)
    );
  }, []);
  console.log(fetched);

  return (
    <div>
      Coast:
      <ul className="actors">
        {fetched &&
          fetched.map((item, index) => (
            <li className="actor" key={index}>
              <img
                className={item.profile_path === null ? 'no-img' : ''}
                src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                alt={item.name}
                height="300"
              />
              <p>{item.name}</p>
              <p>{item.character}</p>
            </li>
          ))}
      </ul>
      <img className="no-img" src="htts://" alt="" />
    </div>
  );
};
