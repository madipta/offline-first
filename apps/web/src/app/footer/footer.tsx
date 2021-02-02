import React from 'react';
import styled from 'styled-components';
import FooterNav from './footer-nav';
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
    }
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <Summary></Summary>
      <ul>
        <FooterNav path="/"></FooterNav>
        <FooterNav path="/add"></FooterNav>
        <FooterNav path="/search"></FooterNav>
      </ul>
    </StyledFooter>
  );
}

export default Footer;
