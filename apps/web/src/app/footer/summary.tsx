import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { DonasiSumContext } from '../app.context';

const StyledSummary = styled.div`
  > div {
    display: flex;
    justify-content: center;
    background-color: #f5f1e3;
    width: 100%;
    padding: 0.5rem 0.75rem;

    h3 {
      color: #960;
      font-style: italic;
      text-align: right;
      margin-right: 0.5rem;
    }

    em {
      color: #373737;
      font-style: normal;
    }
  }
`;

export function Summary() {
  const { sum } = useContext(DonasiSumContext);
  return (
    <StyledSummary>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <h3>total:</h3>
            <em>{sum.toLocaleString()}</em>
          </div>
        )}
      />
    </StyledSummary>
  );
}

export default Summary;
