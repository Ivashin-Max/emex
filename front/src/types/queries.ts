export interface FetchItems {
  findExactAmountTyped: Item[];
}

export interface FetchItem {
  findOne: Item;
}

export interface CreatedItem {
  createItem: Item;
}


export type Item = {
  amount: number
  brand: string
  id: string
  price: number
  name: string
  itemtype: string
  special: string
  __typename: string
};




