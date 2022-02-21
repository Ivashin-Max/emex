import { useQuery } from '@apollo/client';
import { Container, Grid } from '@mui/material';
import getAll from '../../queries/getAllItems';
import { ItemCard } from '../../types/items';
import MultiActionAreaCard from '../ItemCard'
import { useTypedSelector } from "../../hook/useTypedSelector"

const Catalog = () => {
  const { loading, error, data } = useQuery(getAll);
  const state = useTypedSelector(state => state.item)
  console.log('data', data);
  console.log('state', state);

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

          {data.getExactAmount.map((item: ItemCard) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <MultiActionAreaCard item={item} />
            </Grid>
          ))
          }


        </Grid>

      </Container>


    </>
  )
}

export default Catalog