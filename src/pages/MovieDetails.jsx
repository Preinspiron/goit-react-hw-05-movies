import { useEffect, useContext, useState } from 'react';
import { useOutletContext, useParams, Link, Outlet } from 'react-router-dom';
import './style.scss';
import { axiosById } from '../api/axios';

export const Details = () => {
  const [fetched, setFetched] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    axiosById(movieId).then(setFetched).catch(console.log);
    // console.log(ganres);
  }, []);

  return (
    <>
      <button className="back-btn" type="button">
        back
      </button>
      {!fetched ? (
        'Loading...'
      ) : (
        <div>
          <div className="details">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w300/${fetched.poster_path}`}
              alt={fetched.title}
            />
            <div className="details-movie-info">
              <h2>{fetched.title}</h2>
              <p>{fetched.score}</p>
              <span>Score: {Math.round(fetched.vote_average * 10)}%</span>
              <h2>Overview</h2>
              <p>{fetched.overview}</p>
              <h2>Genres</h2>
              <ul>
                {fetched.genres.map(({ name }, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2>Additional Information</h2>
            <ul>
              <li>
                <Link to="coast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
              <Outlet context={movieId} />
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
