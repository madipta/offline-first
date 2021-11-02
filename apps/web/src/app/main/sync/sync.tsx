import { useReducer, useState } from 'react';
import styled from 'styled-components';
import { DeleteDonasi, FindDonasi } from '../../data-access/local';
import { useDonasiInsert } from '../../data-access/server';

const StyledSync = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  height: 100%;
  h1 {
    color: #307080;
    font-size: 1.02rem;
  }
  button {
    background-color: #f7402a;
    color: #fff;
    line-height: 1.85rem;
    padding: 0.2rem 1rem;
    border-radius: 0.15rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }
  button[disabled] {
    background-color: #d4d4d4;
  }
  p {
    color: #666;
    font-size: 0.8rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 1.2rem;
    li {
      margin-bottom: .3rem;
    }
  }
`;

export function Sync() {
  const [count, setCount] = useReducer((c, cp) => cp ? c + 1 : 0, 0);
  const [success, setSuccess] = useReducer((old, val) => val ? [...old, val] : [], []);
  const [loading, setLoading] = useState(false);
  const [add, result] = useDonasiInsert();
  const onSubmit = async () => {
    setLoading(true);
    const data = await FindDonasi({
      selector: {},
      sort: [{ createdAt: 'desc' }],
    });
    if (data && data.length) {
      data.forEach(async (val, i) => {
        const { id, name, phone, amount, createdAt } = val;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await add({ variables: { id, name, phone, amount, createdAt } });
        await DeleteDonasi(id);
        setCount(1);
        setSuccess({ id, name, phone, amount });
      });
    }
    setLoading(false);
  };
  return (
    <StyledSync>
      <h1>Sinkronisasi data ke server</h1>
      <button onClick={() => onSubmit()} disabled={loading}>
        Submit
      </button>
      <p>{count} data synced.</p>
      <ul>
        {success.map((d, i) => (
          <li key={d.id}>
            {d.name} {d.phone ? `(${d.phone})` : ''} ={' '}
            {d.amount.toLocaleString()}
          </li>
        ))}
      </ul>
    </StyledSync>
  );
}

export default Sync;
