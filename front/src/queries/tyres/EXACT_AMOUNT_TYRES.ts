import { gql } from '@apollo/client';

const EXACT_AMOUNT_TYRES = gql`
query ($amount: Float!){
getExactAmountTyres(amount: $amount){
  id
  brand
  amount
  name
  serial
  price
}
}
`;

export default EXACT_AMOUNT_TYRES;

