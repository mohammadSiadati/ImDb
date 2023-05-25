import { Button } from '@mui/material';
import { type } from 'os';
import React, { ReactNode } from 'react';
import { StyledButton } from './styled';

type ButtonLoginType = {
  typeButton: 'text' | 'outlined' | 'contained';
  title: string;
  onClick?: () => void;
  typeBtn?: any;
};

export const BaseButton = (props: ButtonLoginType) => {
  const { typeButton, onClick, typeBtn, title, ...rest } = props;
  return (
    <>
      <StyledButton
        type={typeBtn}
        variant={typeButton}
        onClick={onClick}
        {...rest}
      >
        {title}
      </StyledButton>
    </>
  );
};
