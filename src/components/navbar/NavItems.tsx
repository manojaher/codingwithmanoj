import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useNavigateTo } from '@/hooks/useNavigateTo';
import routes from '@/routing/routes';

interface ListItemModel {
  title: string;
  path: string;
}

const NavItems: React.FC<ListItemModel> = ({ title, path }) => {
  const navigateTo = useNavigateTo();
  return (
    <ListItem className="listItem" key={title} disablePadding>
      <ListItemButton onClick={() => navigateTo(path)}>
        <ListItemText
          primary={title}
          sx={{
            padding: '0px',
            display: 'flex',
            maxLines: 1,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItems;
