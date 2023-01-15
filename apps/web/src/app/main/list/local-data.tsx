import { Table } from '@mantine/core';
import { useContext, useEffect } from 'react';
import { DonasiSumContext } from '../../app.context';
import { useLocalDonasiList } from '../../data-access/local';

export function LocalData() {
  const { data } = useLocalDonasiList();
  const sumContext = useContext(DonasiSumContext);
  const { setSum } = sumContext;
  useEffect(() => {
    if (data.length) {
      setSum(data.map((d) => d.amount).reduce((a, b) => a + b, 0));
    }
    else {
      setSum(0);
    }
  }, [data, setSum]);
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
        {data.map((d, i) => (
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

export default LocalData;
