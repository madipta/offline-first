import { Box, Text } from '@mantine/core';
import { useContext } from 'react';
import { DonasiSumContext } from '../../app.context';

export function Summary() {
  const { sum } = useContext(DonasiSumContext);
  return (
    <Box
      sx={(theme) => ({
        alignItems: 'center',
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'center',
      })}
    >
      <Text color="gray.5" sx={()=>({ fontSize: '.8em' })}>total:</Text>
      <Text color="teal.9" sx={()=>({ fontSize: '.85em' })}><em>{sum.toLocaleString()}</em></Text>
    </Box>
  );
}

export default Summary;
