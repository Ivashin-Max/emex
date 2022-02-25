import { gql } from '@apollo/client';

const EXACT_AMOUNT_DISKS = gql`
query ($amount: Float!){
getExactAmountDisks(amount: $amount){
  id
  brand
  amount
  serial
  price
}
}
`;

export default EXACT_AMOUNT_DISKS;

