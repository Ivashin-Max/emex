import { useQuery } from '@apollo/client';
import { Container, Grid, Button } from '@mui/material';
import EXACT_AMOUNT_TYRES from '../../queries/tyres/EXACT_AMOUNT_TYRES';
import EXACT_AMOUNT_DISKS from '../../queries/disks/EXACT_AMOUNT_DISKS';
import MultiActionAreaCard from '../ItemCard'
import { BasketItem } from '../../types/basket';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import React from 'react';
import { useLocation } from "react-router-dom";
import BasketChange from '../BasketChange';
import { FetchDisks, FetchTyres } from '../../types/queries'

const Catalog = () => {
  let location = useLocation();
  const currentCatalog = location.search.split('=')[1];
  console.log('currentCatalog', currentCatalog)
  const [currentAmount, setCurrentAmount] = React.useState(3)


  const { loading, error, data } = useQuery<FetchTyres>(EXACT_AMOUNT_TYRES, { variables: { amount: currentAmount } });
  // const { data: disks } = useQuery<FetchDisks>(EXACT_AMOUNT_DISKS, { variables: { amount: currentAmount } });


  let fetchMapping = null;
  if (data) fetchMapping = Object.values(data)[0];


  // if (disks) console.log(disks)


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