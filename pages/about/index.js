import OurTeam from '@/components/layout/OurTeam';
import { withLayout } from 'HoCs/withLayout';

const OurTeamPage = () => {
  return <OurTeam />;
};

export default withLayout()(OurTeamPage);
