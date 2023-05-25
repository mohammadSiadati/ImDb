import { BaseButton } from '@/components/atoms/Button/Button';
import { SearchInput } from '@/components/atoms/searchHeader';
import {
  AppBar,
  Box,
  Button,
  Container,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const styles = () => ({
  popoverPaper: {
    width: '90%',
    height: '80%',
    maxHeight: 'unset',
    left: '5% !important',
  },
});
export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    console.log('currect target', event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" sx={{ background: '#301E67' }}>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/">
          <Image alt="imdb" src="/images/imdb.png" width={75} height={75} />
        </Link>
        <Box my="auto">
          <SearchInput />
        </Box>
        <Box my="auto" display="flex">
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <BaseButton typeButton="contained" title="login" />
          </Link>
          <Box ml="10px">
            <Link href="/register" style={{ textDecoration: 'none' }}>
              <BaseButton typeButton="contained" title="Register" />
            </Link>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
