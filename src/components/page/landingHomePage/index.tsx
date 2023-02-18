import { MoviesCart } from '@/components/organism/cart';
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const HomePage = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a6f967edf3msh46091584dc03eb1p1ea70djsn0957a65e07fb',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    };

    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
      .then((response) => response.json())
      .then((response) => setValues(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Grid container p="20px" display="flex" justifyContent="center">
      {values.map((item: any) => (
        <Box key={item.id} p="25px">
          <MoviesCart
            description={item.description}
            altImage={item.title}
            image={item.image}
            rank={item.rating}
            movieName={item.title}
          />
        </Box>
      ))}
    </Grid>
  );
};
