
import { TableBody, TableFooter, Table, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

import { useTypedSelector } from '../../hook/useTypedSelector';
import { RUB_CHAR } from '../../types/items';
import Modal from '../Modal';
import BasketChange from '../BasketChange';



export default function Basket() {
  const basketItems = useTypedSelector(state => state.basket.items)
  const basketAmount = useTypedSelector(state => state.basket.basketAmount)
  const basketTotalPrice =
    basketItems
      .reduce(
        (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.basketAmount), 0
      );



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
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Товар</TableCell>
              <TableCell align="center">Количество</TableCell>
              <TableCell align="right" size='small'>Количество на складе</TableCell>
              <TableCell align="right">Стоимость</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              basketItems.map((basketItem) => (
                <TableRow
                  key={basketItem.id}
                  sx={{ p: 0 }}
                >
                  <TableCell component="th" scope="row">
                    {basketItem.brand} {basketItem.name}
                  </TableCell>
                  <TableCell align="center" >
                    <BasketChange basketItem={basketItem} />
                  </TableCell>
                  <TableCell align="right">{basketItem.amount} </TableCell>
                  <TableCell align="right">{basketItem.price * basketItem.basketAmount} {RUB_CHAR} </TableCell>
                </TableRow>
              ))
            }

            <TableRow>
              <TableCell component="th" scope="row">Общий итог</TableCell>
              <TableCell align="center">{basketAmount}</TableCell>
              <TableCell colSpan={2} align="right">{basketTotalPrice} {RUB_CHAR}</TableCell>
            </TableRow>

            <TableRow sx={{ '&:last-child td': { border: 0 } }}>
              <TableCell colSpan={4} align="right"><Modal /></TableCell>
            </TableRow>

          </TableBody>
        </Table>}

    </TableContainer>
  );
}