import { gql } from '@apollo/client';

const SEARCH_BAR = gql`
query getSerial{
  getSerial(serial: "Toyota") {
    id
    serial
  }
}
`;

export default SEARCH_BAR;

