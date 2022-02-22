import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTypedSelector } from '../../hook/useTypedSelector';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { changeBasket } from '../../store/actions/changeBasket';
import { BasketItem } from '../../types/basket';
import Modal from '../Modal';


export default function Basket() {
  const basketItems = useTypedSelector(state => state.basket.items)
  const basketAmount = useTypedSelector(state => state.basket.basketAmount)
  const basketTotalPrice =
    basketItems
      .reduce(
        (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.basketAmount), 0
      );

  const dispatch = useDispatch();

  React.useEffect(() => {
    (() => {
      console.log("RISOVKA");
    })()
  }, [dispatch])

  const handleDecrement = (basketItem: BasketItem) => {
    if (basketItem.basketAmount === 1) {
      return
    }
    dispatch(changeBasket(basketItem, '-'))
  }

  const handleIncrement = (basketItem: BasketItem) => {
    dispatch(changeBasket(basketItem, '+'))
  }

  return (
    <TableContainer component={Paper} sx={{ p: 5 }}>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h4"
        id="tableTitle"
        component="div"
      >
        Корзина{basketItems.length === 0 &&
          <>, к сожалению, пуста</>}
      </Typography>
      {basketItems.length > 0 &&
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Товар</TableCell>
              <TableCell align="center">Количество</TableCell>
              <TableCell align="right">Стоимость</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              basketItems.map((basketItem) => (
                <TableRow
                  key={basketItem.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {basketItem.brand} {basketItem.name}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={() => handleDecrement(basketItem)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    {basketItem.basketAmount}
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ ml: 1 }}
                      onClick={() => handleIncrement(basketItem)}
                    >
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">{basketItem.price * basketItem.basketAmount} </TableCell>
                </TableRow>
              ))
            }

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Общий итог
              </TableCell>
              <TableCell align="center">{basketAmount}</TableCell>
              <TableCell align="right">{basketTotalPrice}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right"><Modal /></TableCell>
            </TableRow>

          </TableBody>
        </Table>}

    </TableContainer>
  );
}