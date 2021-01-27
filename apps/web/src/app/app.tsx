import React from 'react';
import { StyledApp } from './app.styled';
import { ReactComponent as AddIcon } from './add.svg';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as MoreIcon } from './more.svg';

export function App() {
  return (
    <StyledApp>
      <header>
        <h1>Data Donatur</h1>
      </header>
      <main>
        <div className="main-body">
          <div className="main-row">
            <div className="listNo">1</div>
            <div className="listName">
              <h3>Endang</h3>
              <p>+62812400500600</p>
            </div>
            <div className="listTotal">900000</div>
          </div>
        </div>
      </main>
      <footer>
        <div className="summary">
          <div className="title">total:</div>
          <div className="sum">700000000</div>
        </div>
        <ul className="nav">
          <li>
            <AddIcon className="add-icon"></AddIcon>
            Add
          </li>
          <li>
            <SearchIcon className="icon"></SearchIcon>
            Search
          </li>
          <li>
            <MoreIcon className="icon"></MoreIcon>
            More
          </li>
        </ul>
      </footer>
    </StyledApp>
  );
}

export default App;
