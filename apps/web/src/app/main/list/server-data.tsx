import React, { useContext, useEffect, useState } from 'react';
import { DonasiSumContext } from '../../app.context';
import { useServeDonasiList } from '../../data-access/server';
import ListItem from './list-item';

export function ServerData() {
  const [data, setData] = useState([]);
  const { data: serverData } = useServeDonasiList();
  const sumContext = useContext(DonasiSumContext);
  const { sum, setSum } = sumContext;
  useEffect(() => {
    if (serverData) {
      const list = serverData.pagelist;
      setData(list);
      if (list.length) {
        setSum(list.map((d) => d.amount).reduce((a, b) => a + b, 0));
      }
    }
  }, [serverData, setSum]);
  return (
    <>
      {data.map((d, i) => (
        <ListItem key={d.id} donasi={d} index={i}></ListItem>
      ))}
    </>
  );
}

export default ServerData;
