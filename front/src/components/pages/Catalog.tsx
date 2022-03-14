import { useQuery } from '@apollo/client';
import * as React from 'react';
import MultiActionAreaCard from '../ItemCard'
import { BasketItem } from '../../types/basket';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useLocation } from "react-router-dom";
import { FetchItems } from '../../types/queries'
import EXACT_AMOUNT_TYPED from '../../queries/EXACT_AMOUNT_TYPED';
import { CircularProgress, Typography, Backdrop, Container, Grid, Button } from '@mui/material';


const Catalog = () => {
  let location = useLocation();
  const currentCatalog = location.search.split('=')[1];
  const [currentAmount, setCurrentAmount] = React.useState(4)
  const [loader, setLoader] = React.useState(false);
  const { loading, error, data } = useQuery<FetchItems>(EXACT_AMOUNT_TYPED,
    { variables: { amount: currentAmount, type: currentCatalog } });

  React.useEffect(() => {
    let q: (string | number)[] = ['1'];
    q.push(1);
    if (loading) setLoader(true)
    if (data) setLoader(false)
  }, [loading, data])

  let fetchMapping = null;
  let empty = true;
  if (data) {
    fetchMapping = Object.values(data)[0];
    if (data.findExactAmountTyped.length > 0) {
      empty = false;
    }
  }

  let catalogName = '';
  switch (currentCatalog) {
    case 'tyre':
      catalogName = 'шин'
      break;
    case 'disk':
      catalogName = 'дисков'
      break;
    case 'oil':
      catalogName = 'масел'
      break;

    default:
      break;
  }


  const handleClose = () => {
    setLoader(false);
  };


  const handleMoreClick = () => {
    setCurrentAmount(currentAmount + 4);
  }

  if (error) return (
    <h1>Error, {error.message}</h1>
  )

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography gutterBottom variant="h5" component="div">
          Каталог {catalogName}{data && empty && ', к сожалению, пуст'}
        </Typography>
        <Grid container spacing={10}>
          {data && fetchMapping.map((item: BasketItem) => (
            <Grid item xs={12} sm={6} md={3} key={item.id} >
              <MultiActionAreaCard item={item} img={currentCatalog} />
            </Grid>
          ))
          }
          {data && !empty && <Grid item xs={12} sm={6} md={4} alignSelf='center'>
            <Button
              variant="contained"
              endIcon={<ArrowCircleDownIcon />}
              onClick={handleMoreClick}
              disabled={data.findExactAmountTyped.length < currentAmount}
            >
              Показать ещё
            </Button>

          </Grid>}

        </Grid>
      </Container>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default Catalog