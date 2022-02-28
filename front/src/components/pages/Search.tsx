import { useLazyQuery, useQuery } from '@apollo/client';
import { Container, Grid, Button } from '@mui/material';
import MultiActionAreaCard from '../ItemCard'
import { BasketItem } from '../../types/basket';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import React from 'react';
import { useLocation } from "react-router-dom";
import BasketChange from '../BasketChange';
import { FetchItem, FetchItems, Item } from '../../types/queries'
import GET_ONE_BY_ID from '../../queries/GET_ONE_BY_ID';
import EXACT_AMOUNT_TYPED from '../../queries/EXACT_AMOUNT_TYPED';

const Search = () => {
  let location = useLocation();
  const searchId = location.search.split('=')[1];



  const { loading, error, data } = useQuery<FetchItem>(GET_ONE_BY_ID, { variables: { id: +searchId } });

  const item = [];
  if (data) {
    item.push(data.findOne)
  }



  if (loading) return (
    <h1>Gruzim</h1>
  )
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
              <MultiActionAreaCard item={item} img={"tyre"} />
            </Grid>
          ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default Search