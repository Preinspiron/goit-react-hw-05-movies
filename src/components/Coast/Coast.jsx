import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import noimg from '../../images/no-img.jpg';

function Coast() {
  const { movieId } = useParams();
  const [fetched, setFetched] = useState();
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${Number(movieId)}/credits`).then(
      r => setFetched(r.data.cast)
    );
  }, [movieId]);

  return (
    <div>
      Coast:
      <ul className="actors">
        {fetched &&
          fetched.map((item, index) => (
            <li className="actor" key={index}>
              <div>
                <img
                  className={item.profile_path === null ? 'no-img' : ''}
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w300/${item.profile_path}`
                      : noimg
                  }
                  alt={item.name}
                  height="300"
                  loading="lazy"
                />
                <p>{item.name}</p>
                <p>{item.character}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Coast;
