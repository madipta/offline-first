import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Add from './add/add';
import DonaturList from './donatur-list/donatur-list';
import Search from './search/search';

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled.div`
  flex: 1;
  background-color: #f7f7f7;
  width: 100%;
  overflow-y: auto;
`;

export function Main(props: MainProps) {
  return (
    <StyledMain>
      <Route path="/" exact render={() => <DonaturList />} />
      <Route path="/add" exact render={() => <Add />} />
      <Route path="/search" exact render={() => <Search />} />
    </StyledMain>
  );
}

export default Main;
