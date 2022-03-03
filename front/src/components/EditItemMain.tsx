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
import ChoseItemToEdit from './ChoseItemToEdit';

import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import Avatar from '@mui/material/Avatar';
import AddItem from './AddItem';

const steps = ['Выбор товара', 'Редактирование товара'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <ChoseItemToEdit />;
    case 1:
      return <AddItem edit={true} />;
    default:
      throw new Error('Unknown step');
  }
}



export default function EditItemMain(props: any) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {

    if (activeStep === 0) console.log('dispatch')
    setActiveStep(activeStep + 1);

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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

        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <BuildCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align="center">
          Редактирование товара
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                Товар отредактирован
              </Typography>
              <Typography variant="subtitle1">
                В базу данных отправлен запрос на редактирование товара
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && <ChoseItemToEdit />}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Назад
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Редактировать' : 'Далее'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>

      </Container>
    </>
  );
}