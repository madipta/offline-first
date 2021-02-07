import React, { useState } from 'react';
import styled from 'styled-components';
import LocalData from './local-data';
import ServerData from './server-data';

const StyledList = styled.div`
  width: 100%;
  padding: 0 0 1.5rem;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    padding: 1.4rem 0;
    border-bottom: 1px solid #eee;
    margin-bottom: 1.3rem;

    > div {
      border-left: 1px solid #ccc;
      width: 1px;
      height: 1rem;
    }

    button {
      color: #1b9aaa;
      font-size: .95rem;
      text-decoration: underline;
      margin: 0 1rem;
    }

    button.selected {
      color: #555;
      text-decoration: none;
    }
  }
`;

const StyledDonasiList = styled.ul`
  > li {
    display: flex;
    align-items: center;
    width: 95%;
    padding: 0 0.8rem 0.5rem;
    margin: 0.8rem auto;
    border-style: solid;
    border-width: 0;
    border-color: #eaeaea;
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
        margin-bottom: .03rem;
      }

      p {
        color: #888;
        letter-spacing: 0.05rem;
        font-size: 0.8rem;
      }
    }
  }
`;

function List() {
  const [selected, setSelected] = useState('server');
  const Comp = selected === 'server' ? ServerData : LocalData;
  return (
    <StyledList>
      <nav>
        <button
          onClick={() => setSelected('server')}
          className={selected === 'server' ? 'selected' : ''}
        >
          Saved
        </button>
        <div></div>
        <button
          onClick={() => setSelected('local')}
          className={selected !== 'server' ? 'selected' : ''}
        >
          Draft
        </button>
      </nav>
      <StyledDonasiList>
        <Comp></Comp>
      </StyledDonasiList>
    </StyledList>
  );
}

export default List;
