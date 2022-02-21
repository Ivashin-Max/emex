import { useQuery } from '@apollo/client';
import { Container, Grid, Button, Box } from '@mui/material';
import getExactAmount from '../../queries/getExactAmount';
import { ItemCard } from '../../types/items';
import MultiActionAreaCard from '../ItemCard'
import { useTypedSelector } from "../../hook/useTypedSelector"
import { BasketItem } from '../../types/basket';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Catalog = () => {
  const { loading, error, data } = useQuery(getExactAmount);
  const state = useTypedSelector(state => state.item)
  console.log('data', data);
  console.log('state', state);
  const handleMoreClick = () => {
    console.log('more');

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
          {data.getExactAmount.map((item: BasketItem) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <MultiActionAreaCard item={item} />
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