import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

/* eslint-disable-next-line */
export interface LinkSearchProps {
  show: boolean;
}

const StyledLinkSearch = styled.li`
  .icon {
    width: 1.3rem;
    height: 2rem;
    margin-bottom: 0.2rem;
  }
`;

export function LinkSearch(props: LinkSearchProps) {
  if (!props.show) return (<></>);
  return (
    <StyledLinkSearch>
      <Link to="/search">
        <SearchIcon className="icon"></SearchIcon>
        Search
      </Link>
    </StyledLinkSearch>
  );
}

export default LinkSearch;
