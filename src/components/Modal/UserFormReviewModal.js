import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserForm from '../forms/UserForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserFormReviewModal(props) {

  return (
    <div>
      <Modal

        open={props.open}
     
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Make sure all of your information is correct
          </Typography>
          <Button fullWidth sx={{ mt: 3, mb: 2 }} onClick={props.submit} variant="contained">Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}