import { memo } from 'react';

import IJoke from 'interfaces/Joke';

import JokeItem from './Item';

interface IProps {
  items: IJoke[];
}

const ListJokes: React.FC<IProps> = memo(({ items }) => {
  if (!items.length) {
    return null;
  }

  return (
    <div className='jokes-list'>
      {items.map(item => (
        <JokeItem key={`joke-item-${item.id}`} data={item} />
      ))}
    </div>
  );
});

export default ListJokes;
