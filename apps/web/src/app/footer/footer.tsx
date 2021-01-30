import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../add.svg';
import { ReactComponent as SearchIcon } from '../search.svg';
import { ReactComponent as MoreIcon } from '../more.svg';
import { Link, Route } from 'react-router-dom';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #dddbcd;
  border-style: solid;
  border-color: #eaeaea;
  border-width: 0px;
  border-top-width: 1px;

  .summary {
    display: flex;
    background-color: #f5f1e3;
    width: 100%;
    padding: 0.5rem 1.2rem;

    .title {
      flex: 1;
      color: #888;
      font-size: 0.9rem;
      text-align: right;
      margin-right: 0.5rem;
    }

    .sum {
      color: #373737;
      font-size: 0.9rem;
    }
  }

  .nav {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0.15rem 0 0.25rem;

    > li > a,
    > li > .Link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      place-items: center;
      cursor: pointer;
      color: #1b9aaa;
      font-size: 0.7rem;
      text-decoration: none;
      width: 2rem;
      margin: 0 1.05rem;

      .add-icon {
        width: 2rem;
        height: 2rem;
        margin-bottom: 0.2rem;
      }

      .icon {
        width: 1.3rem;
        height: 2rem;
        margin-bottom: 0.2rem;
      }
    }
  }
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <Route
        path="/"
        exact
        render={() => (
          <div className="summary">
            <div className="title">total:</div>
            <div className="sum">700000000</div>
          </div>
        )}
      />
      <ul className="nav">
        <Route
          path="/"
          exact
          render={() => (
            <>
              <li>
                <Link to="/add">
                  <AddIcon className="add-icon"></AddIcon>
                  Add
                </Link>
              </li>
              <li>
                <Link to="/search">
                  <SearchIcon className="icon"></SearchIcon>
                  Search
                </Link>
              </li>
              <li>
                <div className="Link">
                  <MoreIcon className="icon"></MoreIcon>
                  More
                </div>
              </li>
            </>
          )}
        />
        <Route
          path="/add"
          exact
          render={() => (
            <li>
              <Link to="/add">
                <AddIcon className="add-icon"></AddIcon>
                Add
              </Link>
            </li>
          )}
        />
        <Route
          path="/search"
          exact
          render={() => (
            <li>
              <Link to="/search">
                <SearchIcon className="icon"></SearchIcon>
                Search
              </Link>
            </li>
          )}
        />
      </ul>
    </StyledFooter>
  );
}

export default Footer;
