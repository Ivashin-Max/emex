export const RUB_CHAR = String.fromCharCode(0x20BD);

export interface IItem {
  amount: number;
  price: number;
  brand: string;
  name: string;
  special: string;
  itemtype: string;
  id?: number;
};
