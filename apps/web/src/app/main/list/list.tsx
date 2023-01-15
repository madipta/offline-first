import { Box, Tabs } from '@mantine/core';
import { useState } from 'react';
import LocalData from './local-data';
import ServerData from './server-data';
import Summary from './summary';

function List() {
  const [selected, setSelected] = useState('server');
  const Comp = selected === 'server' ? ServerData : LocalData;
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        paddingBottom: '60px',
      }}
    >
      <Tabs value={selected} onTabChange={setSelected} keepMounted={false}>
        <Tabs.List grow={true} position="center">
          <Tabs.Tab value="server">Saved</Tabs.Tab>
          <Tabs.Tab value="local">Draft</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Box
        sx={{
          height: 'calc(100vh - 220px)',
          overflowY: 'auto',
          marginBottom: '4px',
          marginTop: '16px',
        }}
      >
        <Comp></Comp>
      </Box>
      <Summary></Summary>
    </Box>
  );
}

export default List;
