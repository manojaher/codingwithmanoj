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
        ...centered,
        display: 'flex',
        cursor: 'pointer', // Indicate that the component is tappable
        padding: '0px 10px',
        justifyContent: { md: 'center' }, // Center on medium devices
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Add a subtle background on hover
        },
        '&:active': {
          // Add a ripple effect on click
          position: 'relative',
          overflow: 'hidden',
        },
      }}
      useFlexGap
      onClick={onClick}
    >
      <IconButton color="inherit" edge="start" disableRipple>
        <AppleIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ userSelect: 'none' }}>
        Coding with manoj
      </Typography>
    </Stack>
  );
};
