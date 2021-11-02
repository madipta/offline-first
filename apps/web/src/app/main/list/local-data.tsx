import { useContext, useEffect } from 'react';
import { DonasiSumContext } from '../../app.context';
import { useLocalDonasiList } from '../../data-access/local';
import ListItem from './list-item';

export function LocalData() {
  const { data } = useLocalDonasiList();
  const sumContext = useContext(DonasiSumContext);
  const { sum, setSum } = sumContext;
  useEffect(() => {
    if (data.length) {
      setSum(data.map((d) => d.amount).reduce((a, b) => a + b, 0));
    }
    else {
      setSum(0);
    }
  }, [data, setSum]);
  return (
    <>
      {data.map((d, i) => (
        <ListItem key={d.id} donasi={d} index={i}></ListItem>
      ))}
    </>
  );
}

export default LocalData;
