import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocalDonasiList } from '../../data-access/local';
import { useServeDonasiList } from '../../data-access/server';

const StyledDonaturList = styled.ul`
  width: 100%;
  padding: 1.5rem 0.85rem;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.375rem 0.6rem;
    margin: 0.375rem 0;
    border-style: solid;
    border-width: 0;
    border-color: #e7e7e7;
    border-bottom-width: 1px;

    .listNo {
      min-width: 1.5rem;
      padding-left: 0.3rem;
    }

    .listName {
      flex: 1;
      padding-left: 1rem;
      padding-right: 1rem;
      margin: 0 1rem;

      h3 {
        font-size: 1rem;
        margin-bottom: 4px;
      }

      p {
        font-size: 0.75rem;
      }
    }
  }

  li.sync {
    color: #0a783d;
  }
`;

function DonaturList() {
  const [list, setList] = useState([]);
  const { data: localdata } = useLocalDonasiList();
  const { data: serverData } = useServeDonasiList();
  useEffect(() => {
    const sData = serverData?.pagelist ?? [];
    setList([...localdata, ...sData]);
  }, [serverData, localdata]);
  return (
    <StyledDonaturList>
      {list.map((d, i) => (
        <li key={d.id} className={d.sync ? 'sync' : ''}>
          <div className="listNo">{i + 1}</div>
          <div className="listName">
            <h3>
              {d.name} {d.id}
            </h3>
            <p>{d.phone}</p>
          </div>
          <div>{d.amount}</div>
        </li>
      ))}
    </StyledDonaturList>
  );
}

export default DonaturList;
