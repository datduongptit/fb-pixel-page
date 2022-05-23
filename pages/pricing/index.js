import Pricing from '@/components/layout/Pricing';
import { withLayout } from 'HoCs/withLayout';

const PricingPage = () => {
  return <Pricing />;
};

export default withLayout()(PricingPage);
