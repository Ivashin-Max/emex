import * as React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import { Link } from 'react-router-dom';

import { HeaderMenuProps } from '../types/props';


export default function HeaderMenu(props: HeaderMenuProps) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButton
        component={Link}
        to='/admin'
        onClick={props.onClick}
      >
        <ListItemIcon>
          <SupervisedUserCircleIcon color='info' />
        </ListItemIcon>
        <ListItemText primary="Администратор" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PersonIcon color='info' />
        </ListItemIcon>
        <ListItemText primary="Пользователь" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}
            component={Link}
            to='/catalog?name=tyre'
            onClick={props.onClick}
          >
            <ListItemText primary="Шины" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}
            component={Link}
            to='/catalog?name=disk'
            onClick={props.onClick}
          >
            <ListItemText primary="Диски" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}
            component={Link}
            to='/catalog?name=oil'
            onClick={props.onClick}
          >
            <ListItemText primary="Масла" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}