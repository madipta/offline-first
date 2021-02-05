import React, { useEffect, useState } from 'react';
import { useServeDonasiList } from '../../data-access/server';
import ListItem from './list-item';

export function ServerData() {
  const [data, setData] = useState([]);
  const { data: serverData } = useServeDonasiList();
  useEffect(() => {
    if (serverData) {
      setData(serverData.pagelist);
    }
  }, [serverData]);
  return (
    <>
      {data.map((d, i) => (
        <ListItem key={d.id} donasi={d} index={i}></ListItem>
      ))}
    </>
  );
}

export default ServerData;
