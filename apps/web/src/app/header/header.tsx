import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../icons/back.svg';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #1b9aaa;
  width: 100%;
  padding: 0.875rem;

  .back-icon {
    color: #fff;
    width: 1.2rem;
    height: 1.4rem;
    margin-right: 0.6rem;
  }

  h1 {
    font-size: 1.275rem;
    font-weight: 600;
    color: white;
  }
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <Route path="/" exact render={() => <h1>Tabel Donasi</h1>} />
      <Route
        path="/add"
        exact
        render={() => (
          <>
            <Link to="/">
              <BackIcon className="back-icon"></BackIcon>
            </Link>
            <h1>Tambah Donasi</h1>
          </>
        )}
      />
      <Route
        path="/search"
        exact
        render={() => (
          <>
            <Link to="/">
              <BackIcon className="back-icon"></BackIcon>
            </Link>
            <h1>Pencarian</h1>
          </>
        )}
      />
    </StyledHeader>
  );
}

export default Header;
