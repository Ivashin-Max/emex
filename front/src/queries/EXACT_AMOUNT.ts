import { gql } from '@apollo/client';

const EXACT_AMOUNT = gql`
query ($amount: Float!){
getExactAmount(amount: $amount){
  id
  brand
  amount
  name
  serial
  price
}
}
`;

export default EXACT_AMOUNT;

