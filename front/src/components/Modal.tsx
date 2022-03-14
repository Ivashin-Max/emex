import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { useTypedSelector } from '../hook/useTypedSelector';
import UPDATE_MULTPLE_ITEMS from '../queries/UPDATE_MULTIPLE_ITEMS';
import { UpdateBasketItem } from '../types/basket'
import SnackbarOpen from './Snackbar';

import { useMutation } from '@apollo/client';


export default function Modal() {
  const state = useTypedSelector(state => state.basket);

  const [modalOpen, setModalOpen] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState('');
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const [handleUpdate, { data: updateData }] = useMutation(UPDATE_MULTPLE_ITEMS)


  React.useEffect(() => {
    if (updateData) {
      setSnackMsg('Заказ успешно оформлен!')
      setSnackbarOpen(true);
    }
  }, [updateData])

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOffer = () => {
    const newAmountArr = state.items.map((item) => {
      const newItem: UpdateBasketItem = {
        amount: item.amount - item.basketAmount,
        id: +item.id
      }
      return newItem
    })

    handleUpdate({ variables: { arr: newAmountArr } })
    setModalOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Оформить заказ
      </Button>
      <Dialog
        open={modalOpen}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Оформить заказ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Оформление заказа приведет к изменению его количества на складе
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOffer}>Оформить</Button>
          <Button onClick={handleClose}>Отказаться</Button>
        </DialogActions>
      </Dialog>
      <SnackbarOpen open={snackbarOpen} message={snackMsg} onClose={handleSnackbarClose} />
    </div>
  );
}