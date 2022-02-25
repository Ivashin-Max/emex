export interface FetchTyres {
  getExactAmountTyres: Tyres[];
}

type Tyres = {
  amount: number
  brand: string
  id: string
  price: number
  name: string
  serial: number
  __typename: string
};

export interface FetchDisks {
  getExactAmountDisks: Disks[];
}

type Disks = {
  amount: number
  brand: string
  id: string
  price: number
  serial: number
  __typename: string
};