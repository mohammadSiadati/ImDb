import { BaseButton } from '@/components/atoms/Button/Button';
import Inputs from '@/components/atoms/input/Input';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {
  StyledMainBoxForImage,
  StyledMainGridLogin,
  StyledMainBoxForm,
} from '../login/styled';

export const Register = () => {
  return (
    <>
      <StyledMainBoxForImage>
        <Image alt="imdb" src="/images/imdb.png" width={150} height={150} />
      </StyledMainBoxForImage>
      <StyledMainGridLogin container mx="auto">
        <StyledMainBoxForm>
          <Typography variant="h5" mb="50px" textAlign="center">
            Create Account😋
          </Typography>
          <Box textAlign="center">
            <Box mb="10px">
              <Inputs
                fullWidth
                id="outlined-username-input"
                label="Username"
                type="username"
                autoFocus
              />
            </Box>
            <Inputs
              fullWidth
              id="outlined-email-input"
              label="Email"
              type="email"
              autoFocus
            />
            <Box mt="10px">
              <Inputs
                fullWidth
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Box>
            <Box mt="50px">
              <BaseButton title="Create" typeButton="outlined" />
            </Box>
          </Box>
        </StyledMainBoxForm>
      </StyledMainGridLogin>
    </>
  );
};
