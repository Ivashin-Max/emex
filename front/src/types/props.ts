import { BasketItem } from "./basket";
import { Item } from "./queries";

export interface AddItemProps {
  edit: boolean;
  editId?: number;
}

export interface SnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void
}


export interface CatalogChoiceProps {
  linkTo: string;
  cardName: string;
}

export interface BasketChangeProps {
  basketItem: BasketItem;
}

export interface HeaderMenuProps {
  onClick: () => void;
}

export interface MultiActionAreaCardProps {
  item: Item;
  img: string;
}