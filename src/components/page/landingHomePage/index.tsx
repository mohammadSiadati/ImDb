import { MoviesCart } from '@/components/organism/cart';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import NoSsr from '@mui/material/NoSsr';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { stringify } from 'querystring';
import Link from 'next/link';

export const HomePage = () => {
  const [values, setValues] = useState([]);

  const cookie = new Cookies();
  const hasToken = cookie.get('access-token');

  // let apiKey = ['e072801bb3mshde683469008a8fdp1d20a1jsn72a91eaf3787', f7c4a5c6ddmsh61bdaef41cfe283p1dd30bjsnf4898d8ef558];

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e072801bb3mshde683469008a8fdp1d20a1jsn72a91eaf3787',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    };
    hasToken
      ? fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
          .then((response) => response.json())
          .then((response) => setValues(response))
          .catch((err) => console.error(err))
      : false;
  }, [hasToken]);

  const favoriteHandler = (id: any) => {
    let array = [];
    // array = JSON.parse(localStorage.getItem('Favorite-Movie')) || [];
    array.push(id);
    // console.log('a=', a);
    localStorage.setItem('Favorite-Movie', JSON.stringify(array));
  };

  console.log();

  const child = (
    <NoSsr>
      <Typography pt={25} color="white" variant="h4">
        You Should Get Login😊
      </Typography>
    </NoSsr>
  );

  return (
    <Grid container p="20px" display="flex" justifyContent="center">
      {hasToken
        ? values.map((item: any) => (
            <Box key={item.id} p="25px">
              {/* <Link
                href={`/movies/${item.title}`}
                style={{ textDecoration: 'none' }}
              > */}
              <MoviesCart
                description={item.description}
                altImage={item.title}
                image={item.image}
                rank={item.rank}
                movieName={item.title}
                rate={item.rating}
                onclick={() => {
                  favoriteHandler(item.rank);
                }}
              />
              {/* </Link> */}
            </Box>
          ))
        : child}
    </Grid>
  );
};
