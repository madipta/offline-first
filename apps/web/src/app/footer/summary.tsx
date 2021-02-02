import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SummaryProps {}

const StyledSummary = styled.div`
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
`;

export function Summary(props: SummaryProps) {
  return (
    <StyledSummary>
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
    </StyledSummary>
  );
}

export default Summary;
