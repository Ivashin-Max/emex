import { gql } from '@apollo/client';

const GET_ONE_BY_ID = gql`
query ($id: Int!){
  findOne(id:$id){
  id
  brand
  amount
  name
  serial
  price
  special
  type
  itemtype
}

}
`


export default GET_ONE_BY_ID;