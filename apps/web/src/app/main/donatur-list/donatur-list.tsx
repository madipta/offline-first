import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import * as Database from '../../database/create';

const StyledDonaturList = styled.ul`
  width: 100%;
  padding: 1.5rem .85rem;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    padding: .375rem .6rem;
    margin: .375rem 0;
    border-style: solid;
    border-width: 0;
    border-color: #e7e7e7;
    border-bottom-width: 1px;

    .listNo {
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

    .listTotal {
      font-size: 0.9rem;
      padding-right: 0.3rem;
    }
  }

  li.sync {
    color: #357753;
  }
`;

const GQL = gql`
  query {
    pagelist(take: 20, skip: 0) {
      id
      createdAt
      name
      phone
      amount
      syncedAt
      sync
    }
  }
`;

function DonaturList() {
  const [list, setList] = useState([]);
  const [localdata, setLocalData] = useState([]);
  const { data: serverData } = useQuery(GQL, {
    fetchPolicy: 'cache-first',
  });
  useEffect(() => {
    Database.GetDatabase().then((db) => {
      if (db) {
        const sub = db.donasi
          .find({
            selector: {},
            sort: [{ createdAt: 'desc' }],
          })
          .exec()
          .then((res) => {
            setLocalData(res);
          });
      }
    });
  }, []);
  useEffect(() => {
    if (!serverData) {
      setList(localdata);
      return;
    }
    setList([...localdata, ...serverData.pagelist]);
  }, [serverData, localdata]);
  return (
    <StyledDonaturList>
      {list.map((d, i) => (
        <li key={i} className={d.sync ? "sync" : ""}>
          <div className="listNo">{i + 1}</div>
          <div className="listName">
            <h3>{d.name}</h3>
            <p>{d.phone}</p>
          </div>
          <div className="listTotal">{d.amount}</div>
        </li>
      ))}
    </StyledDonaturList>
  );
}

export default DonaturList;
