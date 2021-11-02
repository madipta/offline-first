import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../icons/add.svg';

/* eslint-disable-next-line */
export interface LinkAddProps {
  show: boolean;
}

const StyledLinkAdd = styled.li`
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export function LinkAdd(props: LinkAddProps) {
  if (!props.show) return (<></>);
  return (
    <StyledLinkAdd>
      <Link to="/add">
        <AddIcon></AddIcon>
        Add
      </Link>
    </StyledLinkAdd>
  );
}

export default LinkAdd;
