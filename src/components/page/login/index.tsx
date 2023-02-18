import { colors, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { BaseButton } from '@/components/atoms/Button/Button';
import Inputs from '@/components/atoms/input/Input';
import Image from 'next/image';
import Link from 'next/link';
import {
  StyledLinkCreateAcc,
  StyledMainBoxForImage,
  StyledMainBoxForm,
  StyledMainGridLogin,
} from './styled';

export const Login = () => {
  return (
    <>
      <StyledMainBoxForImage>
        <Image src="/images/imdb.png" alt="ImDb" width={150} height={150} />
      </StyledMainBoxForImage>
      <StyledMainGridLogin container mx="auto">
        <StyledMainBoxForm>
          <Typography variant="h5" mb="50px" textAlign="center">
            Login Your Account
          </Typography>
          <Box textAlign="center">
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
              <BaseButton title="Login" typeButton="outlined" />
            </Box>
            <Box mt="30px">
              <Typography>
                dont have an account?
                <StyledLinkCreateAcc href="/register">
                  Get Started
                </StyledLinkCreateAcc>
              </Typography>
            </Box>
          </Box>
        </StyledMainBoxForm>
      </StyledMainGridLogin>
    </>
  );
};
