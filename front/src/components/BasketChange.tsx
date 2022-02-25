import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { changeBasket } from '../store/actions/changeBasket';
import { BasketItem } from '../types/basket';

const BasketChange = (props: any) => {
  const dispatch = useDispatch();

  const handleDecrement = (basketItem: BasketItem) => {
    if (basketItem.basketAmount === 1) {
      return
    }
    dispatch(changeBasket(basketItem, '-'))
  }

  const handleIncrement = (basketItem: BasketItem) => {
    console.log('basketItem', basketItem);

    if (basketItem.basketAmount >= basketItem.amount) {
      return
    }
    dispatch(changeBasket(basketItem, '+'))
  }

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => handleDecrement(props.basketItem)}
      >
        <RemoveIcon />
      </IconButton>
      {props.basketItem.basketAmount}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 1 }}
        onClick={() => handleIncrement(props.basketItem)}
      >
        <AddIcon />
      </IconButton>
    </>
  )
}

export default BasketChange