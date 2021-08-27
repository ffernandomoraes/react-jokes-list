import { useState, useEffect, useCallback } from 'react';

import LoadingIndicator from 'components/LoadingIndicator';
import IJoke from 'interfaces/Joke';
import JokesService from 'services/Jokes';

import createUseStyle from '@eduzz/houston-ui/styles/createUseStyles';
import Toast from '@eduzz/houston-ui/Toast';
import Typography from '@eduzz/houston-ui/Typography';

import Empty from './Empty';
import ListJokes from './List';

const useStyles = createUseStyle(theme => ({
  root: {
    padding: '20px 60px',
    background: theme.colors.grey[200]
  },

  title: {
    textAlign: 'center'
  },

  content: {
    padding: '40px 0 80px 0'
  }
}));

function Joke() {
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(true);
  const [list, setList] = useState<IJoke[]>([]);

  const getJokes = useCallback(async () => {
    try {
      const response = await JokesService.getList();
      const { results = [] } = response;

      setList(results);
      setLoading(false);
    } catch (error) {
      Toast.error(error?.message);
    }
  }, []);

  useEffect(() => {
    getJokes();
  }, [getJokes]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography size='xx-large' fontWeight='bold'>
          Jokes
        </Typography>
      </div>

      <div className={classes.content}>
        <Empty count={list.length} />
        <ListJokes items={list} />
      </div>
    </div>
  );
}

export default Joke;
