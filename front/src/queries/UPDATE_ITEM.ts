import { gql } from '@apollo/client';


const UPDATE_ITEM = gql`
mutation updateItem($item:UpdateItemInput!){
  updateItem(updateItemInput:$item){
    id
    amount
    brand
    name
    itemtype
    price
    special
  }
}
`;

export default UPDATE_ITEM;