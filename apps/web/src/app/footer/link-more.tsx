import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreIcon } from '../icons/more.svg';

/* eslint-disable-next-line */
export interface LinkMoreProps {}

const StyledLinkMore = styled.li`
  .icon {
    width: 1.3rem;
    height: 2rem;
    margin-bottom: 0.2rem;
  }
`;

export function LinkMore(props: LinkMoreProps) {
  return (
    <StyledLinkMore>
      <div className="Link">
        <MoreIcon className="icon"></MoreIcon>
        More
      </div>
    </StyledLinkMore>
  );
}

export default LinkMore;
