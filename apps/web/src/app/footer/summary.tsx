import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SummaryProps {}

const StyledSummary = styled.div`
  > div {
    display: flex;
    background-color: #f5f1e3;
    width: 100%;
    padding: 0.5rem 1.5rem;

    h3 {
      flex: 1;
      color: #960;
      font-size: 0.9rem;
      text-align: right;
      margin-right: 0.5rem;
    }

    em {
      color: #373737;
      font-size: 0.9rem;
    }
  }
`;

export function Summary(props: SummaryProps) {
  return (
    <StyledSummary>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <h3>total:</h3>
            <em>700000000</em>
          </div>
        )}
      />
    </StyledSummary>
  );
}

export default Summary;
