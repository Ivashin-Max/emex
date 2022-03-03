import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import Avatar from '@mui/material/Avatar';
import AddItem from './AddItem';
import TextField from '@mui/material/TextField';





export default function EditItemMain(props: any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [editId, setEditId] = React.useState("");

  const isEnabled = editId;
  const handleNext = () => {

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const newItem = {
    //   "amount": Number(amount),
    //   "price": Number(price),
    //   "brand": brand,
    //   "name": name,
    //   "special": special,
    //   "itemtype": type

    // };
    handleNext();

    // handleCreate({ variables: { item: newItem } })
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          maxWidth: 350

        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <BuildCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align="center">Редактирование товара</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            maxWidth: 350
          }}
        >
          <Box>
            {activeStep === 0 && <TextField
              margin="normal"
              required
              fullWidth
              id="brand"
              type="number"
              value={editId}
              onChange={e => setEditId(e.currentTarget.value)}
              label="Id"
              name="id"
            />}
            {activeStep === 1 && <AddItem edit={true} editId={+editId} />}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {activeStep === 1 && <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Назад
              </Button>}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
                disabled={!isEnabled}
              >
                Выбрать товар
              </Button>
            </Box>
          </Box>
        </Box>

        {/* <React.Fragment>
          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            Товар отредактирован
          </Typography>
          <Typography variant="subtitle1">
            В базу данных отправлен запрос на редактирование товара
          </Typography>
        </React.Fragment> */}



      </Container>
    </>
  );
}