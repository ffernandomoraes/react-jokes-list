import { memo } from 'react';

import Typography from '@eduzz/houston-ui/Typography';

interface IProps {
  count: number;
}

const EmptyJokes: React.FC<IProps> = memo(({ count }) => {
  if (count > 0) {
    return null;
  }

  return <Typography>Nenhuma piada encontrada...</Typography>;
});

export default EmptyJokes;
