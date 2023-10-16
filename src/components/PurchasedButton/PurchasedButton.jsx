import React from 'react';
import Button from '@mui/material/Button';

function PurchaseButton() {
  return (
    <Button
      variant="outlined"
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
    ></Button>
  );
}

export default PurchaseButton;
