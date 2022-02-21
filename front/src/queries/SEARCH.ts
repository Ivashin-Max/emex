import { gql } from '@apollo/client';

const SEARCH_BAR = gql`
query GET_SEARCH($searching: String!){
  getSerial(serial: $searching) {
    id
    serial
  }
}
`;


export default SEARCH_BAR;

