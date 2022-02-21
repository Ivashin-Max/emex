import { gql } from '@apollo/client';

const getAll = gql`
query {
getExactAmount(amount:3){
  id
  amount
  brand
  name
}
}
`;

export default getAll;

