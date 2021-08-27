import { memo } from 'react';

import createUseStyle from '@eduzz/houston-ui/styles/createUseStyles';
import Typography from '@eduzz/houston-ui/Typography';

const useStyles = createUseStyle(() => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const LoadingIndicator: React.FC<Record<string, never>> = memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Carregando...</Typography>
    </div>
  );
});

export default LoadingIndicator;
