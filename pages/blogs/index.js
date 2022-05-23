import Blogs from '@/components/layout/Blogs';
import { withLayout } from 'HoCs/withLayout';

const BlogOverView = () => {
  return <Blogs />;
};

export default withLayout()(BlogOverView);
