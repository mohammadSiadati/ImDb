import { Box, Grid, styled, colors } from '@mui/material';
import Link from 'next/link';

export const StyledMainBoxForImage = styled(Box)`
  position: relative;
  top: 60px;
  text-align: center;
`;

export const StyledMainGridLogin = styled(Grid)`
  margin-top: 50px;
  padding: 10px;
  background-color: #b6eada;
  width: 50%;
  border-radius: 8px;
  justify-content: center;
`;

export const StyledMainBoxForm = styled(Box)`
  padding: 10px;
  border: solid 2px transparent;
  border-radius: 8px;
  width: 70%;
`;

export const StyledLinkCreateAcc = styled(Link)`
  color: blue;
  text-decoration: none;
  padding-left: 5px;
`;
