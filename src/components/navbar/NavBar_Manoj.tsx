// import { AppBar, List, Toolbar, Container, Box } from '@mui/material';
// import React from 'react';
// import NavItems from './NavItems_Manoj';
// import routes from './../../routing/routes';
// import { useNavigateTo } from '@/hooks/useNavigateTo';
// import { NavBarLogo } from './NavBarLogo';
// import { centered } from '@/styles/styling';

// interface Props {
//   isDarkMode: boolean;
//   toggleTheme: () => void;
// }

// const NavBar: React.FC<Props> = ({ isDarkMode, toggleTheme }) => {
//   const navigateTo = useNavigateTo();
//   return (
//     <AppBar
//       component="nav"
//       className="navbar"
//       position="sticky"
//       elevation={2}
//       sx={{ flexDirection: 'row', height: '100px' }}
//     >
//       <Toolbar
//         className="toolbar"
//         sx={{
//           display: 'flex',
//           flexGrow: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//         disableGutters
//       >
//         <Box
//           className="container"
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
//             flexGrow: 1, // Allow the container to grow to the maximum size of its parent
//             maxWidth: '80vw',
//           }}
//         >
//           <NavBarLogo
//             onClick={() => {
//               navigateTo('/');
//             }}
//           />
//           <List
//             className="navList"
//             sx={{
//               display: { xs: 'none', md: 'flex' }, // Hide the list on medium devices and below
//               flexDirection: 'row',
//               justifyContent: 'flex-end', // Align the list to the right
//             }}
//           >
//             {routes.map((route) => (
//               <NavItems title={route.name} path={route.path} key={route.path} />
//             ))}
//           </List>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;
