import axios from 'axios';
import Image from 'next/image';
import Inputs from '@/components/atoms/input/Input';
import { Typography, Box, Input } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { LoginButtonGoogle } from '@/components/atoms/loginButtonGoogle';
import { BaseButton } from '@/components/atoms/Button/Button';

import {
  StyledMainBoxForImage,
  StyledMainGridLogin,
  StyledMainBoxForm,
} from '../login/styled';

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const Email = data.email;

    const passWord = data.email;

    const userName = data.username;

    const postData = axios
      .post('http://localhost:3005/v1/auth/sign-up', {
        userName: userName,
        email: Email,
        password: passWord,
        role: 'user',
      })
      .then((res) => {
        console.log(res);

        toast.success('Welcome');
        // window.location.replace('/login');
      })
      .catch(() => {
        {
          userName || Email ? toast.error('you dont have account') : false;
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledMainBoxForImage>
        <Image alt="imdb" src="/images/imdb.png" width={150} height={150} />
      </StyledMainBoxForImage>
      <StyledMainGridLogin container mx="auto">
        <StyledMainBoxForm>
          <Typography variant="h5" mb="50px" textAlign="center">
            Create Account😋
          </Typography>
          <ToastContainer />
          <Box textAlign="center">
            <Box mb="15px">
              <Input
                {...register('username', {
                  pattern: /[A-Za-z]{3}/,
                  min: 5,
                })}
                fullWidth
                placeholder="Username"
                id="outlined-username-input"
                type="username"
                autoFocus
              />
            </Box>
            <Input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
              fullWidth
              id="outlined-email-input"
              type="email"
              placeholder="Email"
              autoFocus
            />
            <Box mt="15px">
              <Input
                {...register('password', {
                  required: 'required',
                  minLength: {
                    value: 5,
                    message: 'min length is 5',
                  },
                })}
                fullWidth
                id="outlined-password-input"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </Box>
            <Box
              mt="50px"
              justifyContent="center"
              display="flex"
              alignItems="center"
            >
              <Box mr="20px">
                <BaseButton
                  typeBtn="submit"
                  title="Register"
                  typeButton="outlined"
                />
              </Box>
              <LoginButtonGoogle />
            </Box>
          </Box>
        </StyledMainBoxForm>
      </StyledMainGridLogin>
    </form>
  );
};
