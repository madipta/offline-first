import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Add from './add/add';
import List from './list/list';
import Search from './search/search';
import Sync from './sync/sync';

const StyledMain = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
`;

function Main() {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sync" element={<Sync />} />
      </Routes>
    </StyledMain>
  );
}

export default Main;
