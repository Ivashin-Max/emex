import { gql } from '@apollo/client';

const EXACT_AMOUNT_TYPED = gql`
query ($amount: Float!, $type: String!){
  findExactAmountTyped(amount: $amount, type:$type){
  id
  brand
  amount
  name
  price
}
}
`;

export default EXACT_AMOUNT_TYPED;
