import { useEffect, Suspense, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { axiosById } from '../api/axios';

const Details = () => {
  const [fetched, setFetched] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { movieId } = useParams();

  useEffect(() => {
    axiosById(movieId).then(setFetched).catch(console.log);
    // console.log(ganres);
  }, [movieId]);

  return (
    <>
      <Link className="back-btn" to={backLinkHref}>
        Back
      </Link>
      {!fetched ? (
        'Loading...111'
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
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};
export default Details;
