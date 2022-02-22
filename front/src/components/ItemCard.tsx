import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTypedSelector } from "../hook/useTypedSelector"
import { useDispatch } from 'react-redux';
import { changeBasket } from '../store/actions/changeBasket';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard(props: any) {
  const state = useTypedSelector(state => state)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeBasket(props.item, '+'))
  }
  const linkToProduct = `/product?id=${props.item.id}`;

  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea
        component={Link}
        to={linkToProduct}
      >
        <CardMedia
          component="img"
          height="140"
          image={require(`../static/img/${props.img}.jpg`)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

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
          {props.item.price}
        </Typography>
      </CardActions>
    </Card>
  );
}