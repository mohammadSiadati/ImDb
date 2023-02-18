import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import SearchIcon from '@mui/icons-material/Search';

export const SearchInput = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};
