import { gql } from '@apollo/client';

const GET_ONE_BY_ID = gql`
query ($id: Int!){
  findOne(id:$id){
  id
  brand
  amount
  name
  price
  special
  itemtype
}

}
`


export default GET_ONE_BY_ID;