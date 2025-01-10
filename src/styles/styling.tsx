import { lineHeight } from '@mui/system';
import React from 'react';

export const centered = {
  alignItems: 'center',
  justifyContent: 'center',
};

export const titleTypography = (
  color = 'inherit',
  height = '40px',
  justifyContent = 'center',
  lineHeight = '40px',
  background = 'red'
) => {
  return {
    color,
    height,
    justifyContent,
    lineHeight,
    background,
  };
};
