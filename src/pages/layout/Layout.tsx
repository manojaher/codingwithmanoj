import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../../utils/theme';
import { getSystemPreference } from '../../utils/getSystemPreference';
import '@scss/themes/theme.scss';

const Layout = () => {
  const [isDarkMode] = useState(getSystemPreference);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default Layout;
