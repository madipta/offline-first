import { Route, Routes } from 'react-router-dom';
import Add from './add/add';
import List from './list/list';
import Search from './search/search';
import Sync from './sync/sync';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/add" element={<Add />} />
      <Route path="/search" element={<Search />} />
      <Route path="/sync" element={<Sync />} />
    </Routes>
  );
}

export default Main;
