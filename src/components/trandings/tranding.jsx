import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../api/axios';

const Tranding = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    axios('day')
      .then(r => r.data.results)
      .then(setData)
      .catch(console.log);
  }, []);

  return (
    <ul>
      {data.map(el => (
        <li key={el.id}>
          <Link to={`movies/${el.id}`} state={{ from: location }}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tranding;
