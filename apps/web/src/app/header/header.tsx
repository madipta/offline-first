import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #1b9aaa;
  width: 100%;
  padding: 0.725rem 0.85rem;

  h1 {
    font-size: 1.175rem;
    font-weight: 600;
    color: white;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Routes>
        <Route path="/" element={<h1>Tabel Donasi</h1>} />
        <Route path="/add" element={<h1>Tambah Donasi</h1>} />
        <Route path="/search" element={<h1>Pencarian</h1>} />
        <Route path="/sync" element={<h1>Simpan ke Server</h1>} />
      </Routes>
    </StyledHeader>
  );
}

export default Header;
