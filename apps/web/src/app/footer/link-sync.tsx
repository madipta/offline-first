import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SyncIcon } from '../icons/sync.svg';

export interface LinkSyncProps {
  show: boolean;
}

const StyledLinkSync = styled.li`
  svg {
    width: 1.3rem;
    height: 2rem;
  }
`;

export function LinkSync(props: LinkSyncProps) {
  if (!props.show) return <></>;
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
