import styled from 'styled-components';
import { ReactComponent as MoreIcon } from '../icons/more.svg';

/* eslint-disable-next-line */
export interface LinkMoreProps {}

const StyledLinkMore = styled.li`
  svg {
    width: 1.3rem;
    height: 2rem;
  }
`;

export function LinkMore(props: LinkMoreProps) {
  return (
    <StyledLinkMore>
      <div className="Link">
        <MoreIcon></MoreIcon>
        More
      </div>
    </StyledLinkMore>
  );
}

export default LinkMore;
