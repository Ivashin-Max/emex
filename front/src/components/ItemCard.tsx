import * as React from 'react';
import { CardActionArea, CardActions, IconButton, CardContent, Card, CardMedia, Typography, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { changeBasket } from '../store/actions/changeBasket';
import { Link } from 'react-router-dom';
import { RUB_CHAR } from '../types/items';
import SnackbarOpen from './Snackbar';
import { MultiActionAreaCardProps } from '../types/props';

export default function MultiActionAreaCard(props: MultiActionAreaCardProps) {

  const dispatch = useDispatch();
  const linkToProduct = `/product?id=${props.item.id}`;
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleClick = () => {
    dispatch(changeBasket(props.item, '+'))
    setSnackbarOpen(true)
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }
  return (
    <>
      <Card sx={{ maxWidth: 220 }}>
        <CardActionArea
          component={Link}
          to={linkToProduct}
        >
          <CardMedia
            component="img"
            height="140"
            image={require(`../static/img/${props.img}.jpg`)}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {props.item.brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions >

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 0.1 }}
            onClick={handleClick}
          >

            <AddShoppingCartIcon color="info" />
          </IconButton>
          <Typography gutterBottom variant="body2" color="text.secondary" >
            {props.item.price} {RUB_CHAR}
          </Typography>

        </CardActions>
      </Card>
      <SnackbarOpen open={snackbarOpen} message='Товар доавлен в корзину!' onClose={handleSnackbarClose} />
    </>
  );
}