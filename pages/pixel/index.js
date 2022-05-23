import PixelPage from '@/components/layout/PixelPage';
import { withLayout } from 'HoCs/withLayout';

const Pixel = () => {
  return <PixelPage />;
};

export default withLayout()(Pixel);
