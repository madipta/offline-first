import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Add from './add/add';
import List from './list/list';
import Search from './search/search';

const StyledMain = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
`;

function Main() {
  return (
    <StyledMain>
      <Route path="/" exact render={() => <List />} />
      <Route path="/add" exact render={() => <Add />} />
      <Route path="/search" exact render={() => <Search />} />
    </StyledMain>
  );
}

export default Main;
