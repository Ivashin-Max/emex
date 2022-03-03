import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useLazyQuery } from '@apollo/client';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Divider from '@mui/material/Divider';
import { AddItemProps } from '../types/props';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CREATE_ITEM from '../queries/CREATE_ITEM';
import { useMutation } from '@apollo/client';
import { useForm, Controller } from "react-hook-form";

export default function AddItem(props: AddItemProps) {

  const [handleCreate, { loading, error, data }] = useMutation(CREATE_ITEM)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const onSubmit = (data: any) => console.log(data);

  const [type, setType] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [special, setSpecial] = React.useState('');

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const newItem = {
  //     brand: data.get('brand'),
  //     name: data.get('name'),
  //     amount: data.get('amount'),
  //     price: data.get('price'),
  //     special: data.get('special'),
  //     itemtype: type,
  //   };
  //   console.log('newItem', newItem);
  //   handleCreate(
  //     {
  //       variables:
  //       {
  //         "item": {
  //           "amount": Number(newItem.amount),
  //           "price": Number(newItem.price),
  //           "brand": newItem.brand,
  //           "name": newItem.name,
  //           "special": newItem.special,
  //           "itemtype": newItem.itemtype

  //         }
  //       }
  //     }
  //   )
  // };
  if (data) console.log('data', data)
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          maxWidth: 350
        }}
        component="form"
        autoComplete='off'
      >
        {!props.edit &&
          <>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AddCircleIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Добавление товара в базу
            </Typography>
          </>
        }
        <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="brand"
            label="Бренд"
            name="brand"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Название"
            id="name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="amount"
            type="number"
            label="Количество"
            id="amount"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            type="number"
            label="Цена"
            id="price"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="special"
            label="Инфо"
            id="special"
          />
          <Box sx={{ minWidth: 120, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="itemtype">Тип товара</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="itemtype"
                value={type}
                label="Тип товара"
                required
                onChange={handleChange}
              >
                <MenuItem value={"disk"}>Диск</MenuItem>
                <MenuItem value={"tyre"}>Шина</MenuItem>
                <MenuItem value={"oil"}>Масло</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {!props.edit && <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

          >
            Добавить товар
          </Button>}
          <Divider orientation="vertical" flexItem />
        </Box>
      </Box>

    </>
  );
}