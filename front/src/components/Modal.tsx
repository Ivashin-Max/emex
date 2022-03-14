import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useTypedSelector } from '../hook/useTypedSelector';
import UPDATE_MULTPLE_ITEMS from '../queries/UPDATE_MULTIPLE_ITEMS';
import { useMutation } from '@apollo/client';
import { UpdateBasketItem } from '../types/basket'
import SnackbarOpen from './Snackbar';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const state = useTypedSelector(state => state.basket);
  const [snackMsg, setSnackMsg] = React.useState('');
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [handleUpdate, { data: updateData }] = useMutation(UPDATE_MULTPLE_ITEMS)


  React.useEffect(() => {
    if (updateData) {
      console.log(updateData)
      setSnackMsg('Заказ успешно оформлен!')
      setSnackbarOpen(true);


    }

  }, [updateData])



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOffer = () => {

    console.log(state)
    const newAmountArr = state.items.map((item) => {
      const newItem: UpdateBasketItem = {
        amount: item.amount - item.basketAmount,
        id: +item.id
      }
      return newItem
    })

    handleUpdate({ variables: { arr: newAmountArr } })
    setOpen(false);
  };


  if (updateData) console.log(updateData)
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Оформить заказ
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
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