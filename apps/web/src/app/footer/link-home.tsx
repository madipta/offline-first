import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../icons/home.svg';

/* eslint-disable-next-line */
export interface LinkHomeProps {
  show: boolean;
}

const StyledLinkHome = styled.li`
  svg {
    width: 1.3rem;
    height: 2rem;
  }
`;

export function LinkHome(props: LinkHomeProps) {
  if (!props.show) return (<></>);
  return (
    <StyledLinkHome>
      <Link to="/">
        <HomeIcon></HomeIcon>
        home
      </Link>
    </StyledLinkHome>
  );
}

export default LinkHome;
