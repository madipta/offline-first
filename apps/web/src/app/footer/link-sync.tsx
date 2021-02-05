import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SyncIcon } from '../icons/sync.svg';

/* eslint-disable-next-line */
export interface LinkSyncProps {}

const StyledLinkSync = styled.li`
  svg {
    width: 1.3rem;
    height: 2rem;
  }
`;

export function LinkSync(props: LinkSyncProps) {
  return (
    <StyledLinkSync>
      <Link to="/sync">
        <SyncIcon></SyncIcon>
        Sync
      </Link>
    </StyledLinkSync>
  );
}

export default LinkSync;
