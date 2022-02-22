import { useQuery } from '@apollo/client';
import { Container, Grid, Button } from '@mui/material';
import EXACT_AMOUNT from '../../queries/EXACT_AMOUNT';
import MultiActionAreaCard from '../ItemCard'
import { BasketItem } from '../../types/basket';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import React from 'react';
import { useLocation } from "react-router-dom";

const Catalog = () => {
  let location = useLocation();
  const currentCatalog = location.search.split('=')[1];
  console.log('currentCatalog', currentCatalog)
  const [currentAmount, setCurrentAmount] = React.useState(3)

  const { loading, error, data } = useQuery(EXACT_AMOUNT, { variables: { amount: currentAmount } });



  if (data) console.log('data', data)  //.getExactAmount.map((i: any) => i.basketAmount = 0));

  const handleMoreClick = () => {
    console.log('currentAmount', currentAmount);
    setCurrentAmount(currentAmount + 3);
    console.log('nextAmount', currentAmount);
  }
  if (loading) return (
    <h1>Gruzim</h1>
  )
  if (error) return (
    <h1>Error, {error.extraInfo}</h1>
  )
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={10}>
          {data && data.getExactAmount.map((item: BasketItem) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <MultiActionAreaCard item={item} img={currentCatalog} />
            </Grid>
          ))
          }
          <Grid item xs={12} sm={6} md={4} >
            <Button
              variant="contained"
              endIcon={<ArrowCircleDownIcon />}
              onClick={handleMoreClick}>
              Показать ещё
            </Button>
          </Grid>
        </Grid>
      </Container>


    </>
  )
}

export default Catalog