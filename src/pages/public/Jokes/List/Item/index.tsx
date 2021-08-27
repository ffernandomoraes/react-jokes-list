import { memo } from 'react';

import IJoke from 'interfaces/Joke';

import Box from '@eduzz/houston-ui/Box';
import createUseStyle from '@eduzz/houston-ui/styles/createUseStyles';
import Typography from '@eduzz/houston-ui/Typography';

interface IProps {
  data: IJoke;
}

const useStyles = createUseStyle(() => ({
  root: {
    boxShadow: 'rgba(0, 0, 0, .1) 0 1px 2px 0, rgba(0, 0, 0, .1) 0 2px 3px 0px'
  }
}));

const JokeItem: React.FC<IProps> = memo(({ data: { id, joke } }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} xs={{ padding: '15px 20px', margin: '0 0 10px 0' }} paper id={`joke-${id}`}>
      <Typography fontWeight='regular' lineHeight='normal'>
        {joke}
      </Typography>
    </Box>
  );
});

export default JokeItem;
