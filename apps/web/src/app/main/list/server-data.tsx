import { useContext, useEffect } from 'react';
import { DonasiSumContext } from '../../app.context';
import { useDonasiList } from '../../data-access/server';
import ListItem from './list-item';

export function ServerData() {
  const [getList, { data }] = useDonasiList();
  const sumContext = useContext(DonasiSumContext);
  const { sum, setSum } = sumContext;
  useEffect(() => {
    getList();
  }, [getList]);
  useEffect(() => {
    if (data) {
      const list = data.list;
      if (list.length) {
        setSum(list.map((d) => d.amount).reduce((a, b) => a + b, 0));
      } else {
        setSum(0);
      }
    }
  }, [data, setSum]);
  if (!data) return <> </>;
  return (
    <>
      {data.list.map((d, i) => (
        <ListItem key={d.id} donasi={d} index={i}></ListItem>
      ))}
    </>
  );
}

export default ServerData;
