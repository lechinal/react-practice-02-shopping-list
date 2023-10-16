import React from 'react';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';

function CheckedButton({ checked, onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      startIcon={<CheckIcon />}
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
    >
      {checked ? 'UNCKD' : 'CHECK'}
    </Button>
  );
}

export default CheckedButton;
