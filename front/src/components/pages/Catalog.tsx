import { useLazyQuery, useQuery } from '@apollo/client';
import { Container, Grid, Button } from '@mui/material';
import MultiActionAreaCard from '../ItemCard'
import { BasketItem } from '../../types/basket';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import React from 'react';
import { useLocation } from "react-router-dom";
import BasketChange from '../BasketChange';
import { FetchItems } from '../../types/queries'
import GET_ONE_BY_ID from '../../queries/GET_ONE_BY_ID';
import EXACT_AMOUNT_TYPED from '../../queries/EXACT_AMOUNT_TYPED';

const Catalog = () => {
  let location = useLocation();
  const currentCatalog = location.search.split('=')[1];
  const [currentAmount, setCurrentAmount] = React.useState(3)


  const { loading, error, data } = useQuery<FetchItems>(EXACT_AMOUNT_TYPED, { variables: { amount: currentAmount, type: currentCatalog } });

  let fetchMapping = null;
  if (data) {

    fetchMapping = Object.values(data)[0];
    // console.log('data', fetchMapping)
  }



  const handleMoreClick = () => {
    // console.log('currentAmount', currentAmount);
    setCurrentAmount(currentAmount + 3);
    // console.log('nextAmount', currentAmount);
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
          {data && fetchMapping.map((item: BasketItem) => (
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