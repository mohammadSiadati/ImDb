import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { Input, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BaseButton } from '@/components/atoms/Button/Button';

import {
  StyledLinkCreateAcc,
  StyledMainBoxForImage,
  StyledMainBoxForm,
  StyledMainGridLogin,
} from './styled';

export const Login = () => {
  const [cookie, setCookie]: any = useCookies(['access-token']);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    axios
      .post('http://localhost:3005/v1/auth/sign-in', {
        email: data.Email,
        password: data.Password,
      })
      .then((res) => {
        setCookie('access-token', res.data.data.accessToken);
        window.location.replace('/');
        toast.success('Welcome');
      })
      .catch((err) => {
        toast.error('you dont have account');
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer />
        <StyledMainBoxForImage>
          <Image src="/images/imdb.png" alt="ImDb" width={150} height={150} />
        </StyledMainBoxForImage>
        <StyledMainGridLogin container mx="auto">
          <StyledMainBoxForm>
            <Typography variant="h5" mb="50px" textAlign="center">
              Login Your Account
            </Typography>
            <Box textAlign="center">
              <Input
                {...register('Email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                  },
                })}
                fullWidth
                // label="Email"
                type="email"
                placeholder="Email"
                autoFocus
              />
              <Box mt="20px">
                <Input
                  fullWidth
                  {...register('Password', {
                    required: 'required',
                    minLength: {
                      value: 5,
                      message: 'min length is 5',
                    },
                  })}
                  // label="Password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </Box>
              <Box mt="50px">
                <BaseButton
                  typeBtn="submit"
                  title="Login"
                  typeButton="outlined"
                />
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
      </form>
    </>
  );
};
