import HomePage from '@/components/layout/HomePage';
import { withLayout } from 'HoCs/withLayout';

const Home = () => {
  return <HomePage />;
};

export default withLayout()(Home);
