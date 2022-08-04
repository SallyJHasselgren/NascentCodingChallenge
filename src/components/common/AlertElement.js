import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';    
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});                                               

export default function AlertElement(props) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.closeAlert();
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar  anchorOrigin={{ vertical: "top", horizontal: "center" }} open={props.alertOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.alertSeverity} sx={{ width: '100%' }}>
          {props.alertMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}