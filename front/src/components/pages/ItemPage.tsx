
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GET_ONE_BY_ID from '../../queries/GET_ONE_BY_ID';
import { FetchItem } from '../../types/queries';
import { RUB_CHAR } from '../../types/items';
import { changeBasket } from '../../store/actions/changeBasket';
import SnackbarOpen from '../Snackbar';
import { useTypedSelector } from '../../hook/useTypedSelector';

import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Box, Paper, Grid, Card, CardMedia, Typography, Divider, IconButton, Container } from '@mui/material';


export default function BasicGrid() {
  let location = useLocation();
  const currentItem = location.search.split('=')[1];
  const { loading, error, data } = useQuery<FetchItem>(GET_ONE_BY_ID, { variables: { id: +currentItem } });
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const basketAmount = useTypedSelector(state => state.basket.basketAmount)
  const [click, setClick] = React.useState(false);

  React.useEffect(() => {
    if (click) setSnackbarOpen(true);
  }, [basketAmount, click])


  const handleClick = () => {
    if (data?.findOne) dispatch(changeBasket(data.findOne, '+'))
    setClick(true)
  }
  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }


  if (error) return (
    <Container sx={{ py: 1 }} maxWidth="lg">
      <h1>Товара с таким id не существует</h1>
    </Container>

  )
  return (
    <>

      <Typography sx={{ ml: 5, mt: 3 }} gutterBottom variant="h5" component="div">
        Страница товара
      </Typography>
      {data &&
        <Box sx={{ flexGrow: 1, p: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                  component="img"
                  height="440"
                  image={require(`../../static/img/${data.findOne.itemtype}.jpg`)}
                />
              </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper sx={{ p: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="body2" color="text.primary" >
                  Информация о товаре:
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.primary" >
                  Бренд: {data.findOne.brand}
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.primary" >
                  Название: {data.findOne.name}
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.primary" >
                  Инфо: {data.findOne.special}
                </Typography>

                <Typography gutterBottom align='left' variant="body2" color="text.primary" >
                  Кол-во на складе: {data.findOne.amount}
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.primary" >
                  Цена: {data.findOne.price} {RUB_CHAR}
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ ml: 0.1 }}
                    title="Добавить в корзину"
                    onClick={handleClick}
                  >
                    <AddShoppingCartIcon color="info" />
                  </IconButton>
                </Typography>
              </Paper>
              <Divider sx={{ m: 2 }} />

              <Paper sx={{ p: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="body2" color="text.primary" >
                  Информация о покупке:
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.primary" >
                  <HomeWorkIcon color="success" sx={{ mr: 1 }} />
                  Бесплатная доставка в пункт самовывоза
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.primary" >
                  <CurrencyRubleIcon color="success" sx={{ mr: 1 }} />
                  Бесплатный возврат всех товаров
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.primary" >
                  <TipsAndUpdatesIcon color="success" sx={{ mr: 1 }} />
                  Консультация по установке
                </Typography>

              </Paper>
            </Grid>
          </Grid>
        </Box>}
      <SnackbarOpen open={snackbarOpen} message='Товар добавлен в корзину!' onClose={handleSnackbarClose} />
    </>
  );
}