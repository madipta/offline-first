import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

export interface LinkSearchProps {
  show: boolean;
}

const StyledLinkSearch = styled.li`
  svg {
    width: 1.3rem;
    height: 2rem;
  }
`;

export function LinkSearch(props: LinkSearchProps) {
  if (!props.show) return (<></>);
  return (
    <StyledLinkSearch>
      <Link to="/search">
        <SearchIcon></SearchIcon>
        Search
      </Link>
    </StyledLinkSearch>
  );
}

export default LinkSearch;
