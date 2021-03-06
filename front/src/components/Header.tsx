import * as React from 'react';
import { Toolbar, Box, AppBar, IconButton, InputBase, Menu, Badge, styled, alpha } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from 'react-router-dom';

import { useTypedSelector } from '../hook/useTypedSelector';
import HeaderMenu from './Header_menu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));



export default function SearchAppBar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [searchInput, setSearchInput] = React.useState(0);
  const linkToSearch = `/search?id=${searchInput}`;
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubmenuClick = () => {
    handleClose();
  }

  const basketAmountNumber = useTypedSelector(state => state.basket.basketAmount)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            component={Link}
            to='/'
          >
            <HomeIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <HeaderMenu onClick={handleSubmenuClick} />
          </Menu>

          <Search sx={{ flexGrow: 1 }}>
            <StyledInputBase
              sx={{ width: '100%' }}
              placeholder="Id???"
              inputProps={{ 'aria-label': 'search' }}
              onChange={event => setSearchInput(+event.target.value)}
            />

          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ ml: 1 }}
            component={Link}
            to={linkToSearch}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ ml: 1 }}
            component={Link}
            to='/basket'
          >
            <Badge badgeContent={basketAmountNumber} color="error"><ShoppingCartIcon /></Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



