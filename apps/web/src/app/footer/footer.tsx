import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import LinkAdd from './link-add';
import LinkHome from './link-home';
import LinkSearch from './link-search';
import LinkSync from './link-sync';
import Summary from './summary';

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

  > ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0.12rem 0 0.25rem;

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
    }
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <Summary></Summary>
      <Routes>
        <Route
          path="/"
          element={
            <ul>
              <LinkHome show={false}></LinkHome>
              <LinkAdd show={true}></LinkAdd>
              <LinkSearch show={true}></LinkSearch>
              <LinkSync show={true}></LinkSync>
            </ul>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <ul>
              <LinkHome show={true}></LinkHome>
              <LinkAdd show={false}></LinkAdd>
              <LinkSearch show={true}></LinkSearch>
              <LinkSync show={true}></LinkSync>
            </ul>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <ul>
              <LinkHome show={true}></LinkHome>
              <LinkAdd show={true}></LinkAdd>
              <LinkSearch show={false}></LinkSearch>
              <LinkSync show={true}></LinkSync>
            </ul>
          }
        ></Route>
        <Route
          path="/sync"
          element={
            <ul>
              <LinkHome show={true}></LinkHome>
              <LinkAdd show={true}></LinkAdd>
              <LinkSearch show={true}></LinkSearch>
              <LinkSync show={false}></LinkSync>
            </ul>
          }
        ></Route>
      </Routes>
    </StyledFooter>
  );
}

export default Footer;
