import { Outlet, NavLink } from 'react-router-dom';
import { Suspense, useRef, useEffect } from 'react';
import axios from '../../api/axios';

const SharedHeader = () => {
  let refData = useRef([]);

  useEffect(() => {
    axios('day').then(r => (refData.current = r));
  }, []);

  return (
    <div>
      <nav>
        <div>
          <NavLink className="link-header" to="/">
            Home
          </NavLink>
          <NavLink className="link-header" to="/movies">
            Movies
          </NavLink>
        </div>
      </nav>
      <hr />

      <Suspense fallback={<div>Loadind........</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedHeader;
