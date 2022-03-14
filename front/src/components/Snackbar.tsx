import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { SnackbarProps } from '../types/props';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref,) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarOpen = (props: SnackbarProps) => {


  return (
    <Snackbar open={props.open} autoHideDuration={8000} onClose={props.onClose}>
      <Alert onClose={props.onClose} severity="success" sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarOpen