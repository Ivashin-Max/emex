import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTypedSelector } from "../hook/useTypedSelector"
import { useDispatch } from 'react-redux';
import { addToBasket } from '../store/actions/addToBasket';

export default function MultiActionAreaCard(props: any) {
  const state = useTypedSelector(state => state)
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('click on', props.item)
    console.log('state', state)

    dispatch(addToBasket(props.item))
  }

  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../static/img/tyres.jpeg')}
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