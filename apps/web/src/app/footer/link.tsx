import { Box, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';

export function Link({ to, title, icon }) {
  return (
    <NavLink
      to={to}
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '.67rem',
        textDecoration: 'none',
        width: '36px',
      }}
    >
      <Box
        sx={(theme) => ({
          color: theme.colors.green[9],
          height: '24px',
          width: '24px',
        })}
      >
        {icon}
      </Box>
      <Text
        sx={(theme) => ({
          color: theme.colors.gray[5],
        })}
      >
        {title}
      </Text>
    </NavLink>
  );
}
