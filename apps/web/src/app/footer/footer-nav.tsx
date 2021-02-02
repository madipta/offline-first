import React from 'react';
import { Route } from 'react-router-dom';
import LinkAdd from './link-add';
import LinkHome from './link-home';
import LinkMore from './link-more';
import LinkSearch from './link-search';

export interface NavHomeProps {
  path: string;
}

export function FooterNav(props: NavHomeProps) {
  return (
    <Route
      path={props.path}
      exact
      render={() => (
        <>
          <LinkHome show={props.path !== "/"}></LinkHome>
          <LinkAdd show={props.path !== "/add"}></LinkAdd>
          <LinkSearch show={props.path !== "/search"}></LinkSearch>
          <LinkMore></LinkMore>
        </>
      )}
    />
  );
}

export default FooterNav;
