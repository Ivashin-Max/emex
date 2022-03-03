import { gql } from '@apollo/client';


const CREATE_ITEM = gql`
mutation createItem($item:CreateItemInput!){
  createItem(createItemInput:$item){
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

export default CREATE_ITEM;