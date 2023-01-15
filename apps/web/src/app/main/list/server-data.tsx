import { Table } from '@mantine/core';
import { useContext, useEffect } from 'react';
import { DonasiSumContext } from '../../app.context';
import { useDonasiList } from '../../data-access/server';

export function ServerData() {
  const [getList, { data }] = useDonasiList();
  const sumContext = useContext(DonasiSumContext);
  const { setSum } = sumContext;
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
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name+(Phone)</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.list.map((d, i) => (
          <tr key={i + d.name}>
            <td>{i + 1}</td>
            <td>{d.name} {d.phone ? ` (${d.phone})`: ""}</td>
            <td>{d.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ServerData;
