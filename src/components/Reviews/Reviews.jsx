import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
  const { movieId } = useParams();
  const [fetched, setFetched] = useState();
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${Number(movieId)}/reviews`).then(
      r => setFetched(r.data.results)
    );
  }, [movieId]);
  console.log(fetched);

  return (
    <div>
      Coast:
      <ul className="actors">
        {fetched &&
          fetched.map((item, index) => (
            <li key={index}>
              {/* <img
                className={item.profile_path === null ? 'no-img' : ''}
                src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                alt={item.name}
                height="300"
              /> */}
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
