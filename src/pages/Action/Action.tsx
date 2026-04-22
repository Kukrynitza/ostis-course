import { useMatch } from 'react-router';
import { ScnPage } from '@components/ScnPage';
import { routes } from '@constants';

const Action = () => {
  const match = useMatch(routes.ACTION);

  if (match?.params.format !== 'scn') return null;

  return <ScnPage />;
};

export default Action;
