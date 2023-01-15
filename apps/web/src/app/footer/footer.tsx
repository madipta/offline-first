import { Box } from '@mantine/core';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as SyncIcon } from '../icons/sync.svg';
import { Link } from './link';

export function Footer() {
  return (
    <Box
      component="nav"
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0 auto',
        width: '220px'
      })}
    >
      <Link to="/" title="Home" icon={<HomeIcon></HomeIcon>}></Link>
      <Link to="/add" title="Add" icon={<AddIcon></AddIcon>}></Link>
      <Link to="/search" title="Search" icon={<SearchIcon></SearchIcon>}></Link>
      <Link to="/sync" title="Sync" icon={<SyncIcon></SyncIcon>}></Link>
    </Box>
  );
}

export default Footer;
