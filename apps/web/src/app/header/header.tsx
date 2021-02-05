import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #1b9aaa;
  width: 100%;
  padding: 0.825rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Route path="/" exact render={() => <h1>Tabel Donasi</h1>} />
      <Route path="/add" exact render={() => <h1>Tambah Donasi</h1>} />
      <Route path="/search" exact render={() => <h1>Pencarian</h1>} />
    </StyledHeader>
  );
}

export default Header;
