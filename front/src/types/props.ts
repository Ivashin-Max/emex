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