import { gql } from '@apollo/client';


const UPDATE_MULTIPLE_ITEMS = gql`
mutation($arr:[UpdateItemInput!]!){
  updateMultipleItems(updateItemsArr:$arr){
    id
    name
    amount
  }
}
`;

export default UPDATE_MULTIPLE_ITEMS;