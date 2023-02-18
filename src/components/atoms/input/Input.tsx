import React from 'react';
import TextField from '@mui/material/TextField';

type TextFieldType = {
  fullWidth: boolean;
  id: string;
  label: string;
  type: string;
  autoFocus?: boolean;
  autoComplete?: string;
};

const Inputs = (props: TextFieldType) => {
  const { fullWidth, id, label, type, autoComplete, autoFocus } = props;
  return (
    <>
      <TextField
        autoFocus={autoFocus}
        fullWidth={fullWidth}
        id={id}
        label={label}
        type={type}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default Inputs;
