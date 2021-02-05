import React from 'react';
import { Route } from 'react-router-dom';
import LinkAdd from './link-add';
import LinkHome from './link-home';
import LinkSearch from './link-search';
import LinkSync from './link-sync';

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
          <LinkHome show={props.path !== '/'}></LinkHome>
          <LinkAdd show={props.path !== '/add'}></LinkAdd>
          <LinkSearch show={props.path !== '/search'}></LinkSearch>
          <LinkSync></LinkSync>
        </>
      )}
    />
  );
}

export default FooterNav;
