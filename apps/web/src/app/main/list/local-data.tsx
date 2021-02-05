import React from 'react';
import { useLocalDonasiList } from '../../data-access/local';
import ListItem from './list-item';

export function LocalData() {
  const { data } = useLocalDonasiList();
  return (
    <>
      {data.map((d, i) => (
        <ListItem key={d.id} donasi={d} index={i}></ListItem>
      ))}
    </>
  );
}

export default LocalData;
