import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DonaturListProps {}

const StyledDonaturList = styled.ul`
  width: 100%;
  padding: 1.5rem 2rem;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
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
        color: #6e6e6e;
        font-size: 0.75rem;
      }
    }

    .listTotal {
      font-size: 0.9rem;
      color: #383838;
      padding-right: 0.3rem;
    }
  }
`;

const GQL = gql`
  query GetList {
    pagelist(take: 20, skip: 0) {
      id
      createdAt
      name
      phone
      amount
      syncedAt
      synced
    }
  }
`;

export function DonaturList(props: DonaturListProps) {
  const { loading, error, data } = useQuery(GQL);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const donaturs = data.pagelist;
  return (
    <StyledDonaturList>
      {donaturs.map((d, i) => (
        <li key={i}>
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
