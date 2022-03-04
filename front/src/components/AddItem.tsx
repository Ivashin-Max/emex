import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useLazyQuery, useQuery } from '@apollo/client';
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
import Input from "@mui/material/Input";
import GET_ONE_BY_ID from '../queries/GET_ONE_BY_ID';
import { FetchItem } from '../types/queries';
import { IItemType } from '../types/useStateTypes';
import UPDATE_ITEM from '../queries/UPDATE_ITEM';
import { IItem } from '../types/items';

export default function AddItem(props: AddItemProps) {

  const [handleCreate, { data: createData }] = useMutation(CREATE_ITEM)
  const [handleUpdate, { data: updateData }] = useMutation(UPDATE_ITEM)
  const { loading, error, data: editData } = useQuery<FetchItem>(GET_ONE_BY_ID, { variables: { id: props.editId }, skip: !props.edit });

  const [type, setType] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [special, setSpecial] = React.useState('');
  const isEnabled = type && brand && name && amount && price && special;
  React.useEffect(() => {
    if (editData) {
      setType(editData.findOne.itemtype)
      setBrand(editData.findOne.brand)
      setName(editData.findOne.name)
      setAmount(editData.findOne.amount.toString())
      setPrice(editData.findOne.price.toString())
      setSpecial(editData.findOne.special)
    }

  }, [editData])


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newItem: IItem = {
      "amount": Number(amount),
      "price": Number(price),
      "brand": brand,
      "name": name,
      "special": special,
      "itemtype": type,
    };

    if (props.edit) {
      newItem.id = props.editId
      handleUpdate({ variables: { item: newItem } })
    }
    else handleCreate({ variables: { item: newItem } })
  };



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
        onSubmit={handleSubmit}
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

        {!error && !loading && !updateData && <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="brand"
            value={brand}
            onChange={e => setBrand(e.currentTarget.value)}
            label="Бренд"
            name="brand"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            label="Название"
            id="name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="amount"
            value={amount}
            onChange={e => setAmount(e.currentTarget.value)}
            type="number"
            label="Количество"
            id="amount"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            value={price}
            onChange={e => setPrice(e.currentTarget.value)}
            type="number"
            label="Цена"
            id="price"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="special"
            value={special}
            onChange={e => setSpecial(e.currentTarget.value)}
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
            disabled={!isEnabled}
          >
            Добавить товар
          </Button>}
          {props.edit && <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isEnabled}
          >
            Редактировать товар
          </Button>}
          <Divider orientation="vertical" flexItem />
        </Box>}

        {error &&
          <>
            <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
              Ошибка!
            </Typography>
            <Typography variant="subtitle1">
              {error.message}
            </Typography>
          </>
        }
        {updateData &&
          <>
            <Typography variant="h5" gutterBottom sx={{ mt: 2 }} alignItems="center">
              Успешно!
            </Typography>
            <Typography variant="subtitle1">
              Товар  отредактирован
            </Typography>
          </>
        }
      </Box>

    </>
  );
}