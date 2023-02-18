import { Button } from '@mui/material';
import { type } from 'os';
import React, { ReactNode } from 'react';
import { StyledButton } from './styled';

type ButtonLoginType = {
  typeButton: 'text' | 'outlined' | 'contained';
  title: string;
  onClick?: () => void;
};

export const BaseButton = (props: ButtonLoginType) => {
  const { typeButton, onClick, title, ...rest } = props;
  return (
    <>
      <StyledButton variant={typeButton} onClick={onClick} {...rest}>
        {title}
      </StyledButton>
    </>
  );
};
