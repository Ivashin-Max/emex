import { useQuery } from '@apollo/client';
import { useLocation } from "react-router-dom";
import { Container, Grid } from '@mui/material';

import MultiActionAreaCard from '../ItemCard'
import { FetchItem, Item } from '../../types/queries'
import GET_ONE_BY_ID from '../../queries/GET_ONE_BY_ID';

const Search = () => {
  let location = useLocation();
  const searchId = location.search.split('=')[1];



  const { error, data } = useQuery<FetchItem>(GET_ONE_BY_ID, { variables: { id: +searchId } });

  const item = [];
  if (data) {
    item.push(data.findOne)
  }




  if (error) return (
    <Container sx={{ py: 1 }} maxWidth="lg">
      <h1>Товара с таким id не существует</h1>
    </Container>

  )
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={10}>
          {data && item.map((item: Item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <MultiActionAreaCard item={item} img={data.findOne.itemtype} />
            </Grid>
          ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default Search