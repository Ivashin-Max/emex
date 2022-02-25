import { gql } from '@apollo/client';

const GET_ONE_BY_ID = gql`
query {
  findOneTyre(id: 3){
  id
  brand
  amount
  name
  price
  }
}
`;

export default GET_ONE_BY_ID;