export interface FetchItems {
  findExactAmountTyped: Item[];
}

export interface FetchItem {
  findOne: Item;
}

export type Item = {
  amount: number
  brand: string
  id: string
  price: number
  name: string
  itemtype: string
  special: string
  type: string
  __typename: string
};

