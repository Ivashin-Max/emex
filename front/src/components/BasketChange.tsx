import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { changeBasket } from '../store/actions/changeBasket';
import { removeBasketItem } from '../store/actions/removeBasketItem';
import { BasketItem } from '../types/basket';
import DeleteIcon from '@mui/icons-material/Delete';


const BasketChange = (props: any) => {
  const dispatch = useDispatch();

  const handleDecrement = (basketItem: BasketItem) => {
    if (basketItem.basketAmount === 1) {
      return
    }
    dispatch(changeBasket(basketItem, '-'))
  }

  const handleIncrement = (basketItem: BasketItem) => {

    if (basketItem.basketAmount >= basketItem.amount) {
      return
    }
    dispatch(changeBasket(basketItem, '+'))
  }

  const handleDelete = (basketItem: BasketItem) => {
    dispatch(removeBasketItem(basketItem))
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
      <IconButton
        size="large"
        edge="start"
        color="error"
        aria-label="menu"
        onClick={() => handleDelete(props.basketItem)}
      >
        <DeleteIcon />
      </IconButton>
    </>
  )
}

export default BasketChange