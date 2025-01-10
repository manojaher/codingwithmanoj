import { Stack, IconButton, Typography } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import { centered } from '@/styles/styling';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface NavBarModel {
  onClick: () => void;
}

export const NavBarLogo: React.FC<NavBarModel> = ({ onClick }) => {
  return (
    <Stack
      direction="row"
      sx={{
        background: 'brown',
        ...centered,
        display: 'flex',
        cursor: 'pointer', // Indicate that the component is tappable
      }}
      onClick={onClick}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        disableRipple
      >
        <AppleIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' }, userSelect: 'none' }}
      >
        Coding with manoj
      </Typography>
    </Stack>
  );
};
