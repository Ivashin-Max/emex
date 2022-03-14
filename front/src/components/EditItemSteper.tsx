import * as React from 'react';
import { Box, Container, Button, Typography, Avatar, TextField } from '@mui/material';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import AddItem from './AddItem';


export default function EditItemMain() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [editId, setEditId] = React.useState("");

  const isEnabled = editId;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <>
      <Container
        sx={{
          ml: 0,
          mr: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          width: "auto",
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
            maxWidth: 350,
            width: "100%"
          }}
        >

          {activeStep === 0 &&
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                value={editId}
                onChange={e => setEditId(e.currentTarget.value)}
                label="Id"
              />
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
                disabled={!isEnabled}
              >
                Выбрать товар
              </Button>
            </>
          }
          {activeStep === 1 &&
            <>
              <AddItem edit={true} editId={+editId} />
              <Button variant="contained" onClick={handleBack} sx={{ m: 1 }}>
                Назад
              </Button>
            </>
          }
        </Box>

      </Container>
    </>
  );
}