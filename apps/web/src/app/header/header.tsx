import { Route, Routes } from 'react-router-dom';

export function Header() {
  return (
    <Routes>
      <Route path="/" element="Tabel Donasi" />
      <Route path="/add" element="Tambah Donasi" />
      <Route path="/search" element="Pencarian" />
      <Route path="/sync" element="Simpan ke Server" />
    </Routes>
  );
}

export default Header;
