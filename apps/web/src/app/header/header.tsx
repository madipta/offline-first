import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #1b9aaa;
  width: 100%;
  padding: .725rem .85rem;

  h1 {
    font-size: 1.175rem;
    font-weight: 600;
    color: white;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Route path="/" exact render={() => <h1>Tabel Donasi</h1>} />
      <Route path="/add" exact render={() => <h1>Tambah Donasi</h1>} />
      <Route path="/search" exact render={() => <h1>Pencarian</h1>} />
      <Route path="/sync" exact render={() => <h1>Simpan ke Server</h1>} />
    </StyledHeader>
  );
}

export default Header;
