import { AppBar, List, Toolbar, Container } from '@mui/material';
import React from 'react';
import NavItems from './NavItems';
import routes from './../../routing/routes';
import { useNavigateTo } from '@/hooks/useNavigateTo';
import { NavBarLogo } from './NavBarLogo';

interface Props {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const NavBar: React.FC<Props> = ({ isDarkMode, toggleTheme }) => {
  const navigateTo = useNavigateTo();
  return (
    <AppBar
      component="nav"
      className="navbar"
      position="sticky"
      elevation={2}
      sx={{ background: 'red', flexDirection: 'row', height: '100px' }}
    >
      <Toolbar
        className="toolbar"
        sx={{
          display: 'flex',
          flexGrow: '1',
          background: 'blue',
        }}
      >
        <Container
          className="container"
          sx={{
            display: 'flex',
            background: 'yellow',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <NavBarLogo
            onClick={() => {
              navigateTo('/');
            }}
          />
          <List
            className="navList"
            sx={{
              background: 'yellow',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end', // Align the list to the right
            }}
          >
            {routes.map((route) => (
              <NavItems title={route.name} path={route.path} key={route.path} />
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
