import * as React from 'react';
import {
  Select, SelectChangeEvent, Avatar, Button, Box, Typography,
  Divider, InputLabel, MenuItem, FormControl, TextField
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useQuery, useMutation } from '@apollo/client';

import { AddItemProps } from '../types/props';
import { IItem } from '../types/items';
import { FetchItem } from '../types/queries';

import CREATE_ITEM from '../queries/CREATE_ITEM';
import GET_ONE_BY_ID from '../queries/GET_ONE_BY_ID';
import UPDATE_ITEM from '../queries/UPDATE_ITEM';
import EXACT_AMOUNT_TYPED from '../queries/EXACT_AMOUNT_TYPED';

import SnackbarOpen from './Snackbar';


export default function AddItem(props: AddItemProps) {
  const [type, setType] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [special, setSpecial] = React.useState('');
  const [snackMsg, setSnackMsg] = React.useState('');
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const [handleCreate, { data: createData }] = useMutation(CREATE_ITEM,
    {
      refetchQueries: [{
        query: EXACT_AMOUNT_TYPED,
        variables: { amount: 4, type: type }
      }]
    })
  const [handleUpdate, { data: updateData }] = useMutation(UPDATE_ITEM,
    {
      refetchQueries: [{
        query: EXACT_AMOUNT_TYPED,
        variables: { amount: 4, type: type }
      }]
    })
  const { loading, error, data: editData } = useQuery<FetchItem>(GET_ONE_BY_ID,
    { variables: { id: props.editId }, skip: !props.edit });

  const isEnabled = type && brand && name && amount && price && special;

  const paddingEdit = props.edit ? 0 : 2;

  React.useEffect(() => {
    if (editData) {
      setType(editData.findOne.itemtype)
      setBrand(editData.findOne.brand)
      setName(editData.findOne.name)
      setAmount(editData.findOne.amount.toString())
      setPrice(editData.findOne.price.toString())
      setSpecial(editData.findOne.special)
    }

    if (createData) {
      setSnackMsg('?????????? ?????????????? ????????????????!')
      setSnackbarOpen(true)
    }

    if (updateData) {
      setSnackMsg('?????????? ?????????????? ????????????????????????????!')
      setSnackbarOpen(true)
    }

  }, [createData, editData, updateData])

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

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
    else {
      handleCreate({ variables: { item: newItem } })
      clearInputs()
    }
  };

  const clearInputs = () => {
    setType('')
    setBrand('')
    setName('')
    setAmount('')
    setPrice('')
    setSpecial('')
  }


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
          p: paddingEdit,
          maxWidth: 350,
          pr: 3
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

            <Typography component="h1" variant="h5" textAlign='center'>
              ???????????????????? ???????????? ?? ????????
            </Typography>
          </>
        }


        {!error && !loading && <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="brand"
            value={brand}
            onChange={e => setBrand(e.currentTarget.value)}
            label="??????????"
            name="brand"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            label="????????????????"
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
            label="????????????????????"
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
            label="????????"
            id="price"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="special"
            value={special}
            onChange={e => setSpecial(e.currentTarget.value)}
            label="????????"
            id="special"
          />
          <Box sx={{ minWidth: 120, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="itemtype">?????? ????????????</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="itemtype"
                value={type}
                label="?????? ????????????"
                required
                onChange={handleChange}
              >
                <MenuItem value={"disk"}>????????</MenuItem>
                <MenuItem value={"tyre"}>????????</MenuItem>
                <MenuItem value={"oil"}>??????????</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isEnabled}
          >
            {!props.edit ? <span>???????????????? ??????????</span> : <span>?????????????????????????? ??????????</span>}
          </Button>
          <SnackbarOpen open={snackbarOpen} message={snackMsg} onClose={handleSnackbarClose} />
          <Divider orientation="vertical" flexItem />
        </Box>}

        {error &&
          <>
            <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
              ????????????!
            </Typography>
            <Typography variant="subtitle1">
              ???????????? ?? ?????????? id ???? ????????????????????
            </Typography>
          </>
        }
      </Box>

    </>
  );
}