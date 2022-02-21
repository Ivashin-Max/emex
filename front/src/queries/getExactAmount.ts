import { gql } from '@apollo/client';

const getExactAmount = gql`
query {
getExactAmount(amount:3){
  id
  amount
  brand
  name
  serial
  price
}
}
`;

export default getExactAmount;

