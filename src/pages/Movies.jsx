import { axiosSearch } from '../api/axios';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [searchQ, setSearchQ] = useState([]);
  const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const params = search.get('name') ?? '';
  console.log(1, params);
  // const handleSearch = e => {
  //   const { value } = e.target;
  //   const name = value === '' ? {} : { name: value };
  //   console.log(name);
  //   setSearch(name);
  // };
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.elements.name;
    const name = value === '' ? {} : { name: value };
    setSearch(name);
    console.log(location);
  };
  useEffect(() => {
    axiosSearch(params).then(r => setSearchQ(r));
  }, [params]);

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   axiosSearch('search/movie', {
  //     baseUTL: 'https://api.themoviedb.org/3/',
  //     params: { query: params },
  //   }).then(console.log);
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            // onChange={handleSearch}
            // value={params}
          />
          <button>Search</button>
        </label>
      </form>
      <ul>
        {searchQ.map((item, index) => (
          <li key={index}>
            <Link to={`${item.id}`} state={{ from: location }}>
              <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
