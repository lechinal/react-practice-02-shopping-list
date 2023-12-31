import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton(props) {
  return (
    <Button
      variant="outlined"
      startIcon={<DeleteIcon />}
      sx={{
        color: 'black',
        borderColor: 'black',
        fontWeight: 700,
        '&:hover': {
          color: 'white',
          backgroundColor: 'black',
          borderColor: 'black',
        },
      }}
      onClick={props.onClick}
    >
      Delete
    </Button>
  );
}

export default DeleteButton;
