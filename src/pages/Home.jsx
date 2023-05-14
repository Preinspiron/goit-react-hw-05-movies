// import Tranding from '../components/trandings/tranding';
import './style.scss';
import { lazy, Suspense } from 'react';

const Tranding = lazy(() => import('../components/trandings/tranding'));
const Home = () => (
  <>
    <h1>Tranding today</h1>
    <Suspense fallback={'123'}>
      <Tranding />
    </Suspense>
  </>
);

export default Home;
