import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type CartMovies = {
  description: string;
  altImage: string;
  image: string;
  rank: number | string;
  onclick?: any;
  movieName: string;
  rate: string;
};

export const MoviesCart = (props: CartMovies) => {
  const { image, altImage, description, movieName, rank, rate, onclick } =
    props;
  const [color, setColor] = useState(<BookmarkBorderIcon />);
  const [icon, setIcon] = useState(<BookmarkIcon />);

  const array = localStorage.getItem('Favorite-Movie');
  console.log(array);

  // const search = array.find((item) => {
  //   item;
  // });

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          background: '#B6EADA',
          padding: '8px',
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ maxWidth: '100%', height: 'auto' }}
            image={image}
            alt={altImage}
          />
          <CardContent
            sx={{
              display: 'block',
              textOverflow: 'ellipsis',
              wordWrap: 'break-word',
            }}
          >
            <Box display="flex">
              <Typography gutterBottom variant="h6" component="div">
                {rank}:
              </Typography>
              <Typography ml="5px" gutterBottom variant="h6" component="div">
                {movieName}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            justifyContent: 'space-between',
            position: 'relative',
            top: 0,
          }}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={onclick}
          ></IconButton>
          <Box display="flex" alignItems="center">
            <Box mr="5px">
              <StarIcon sx={{ color: '#ffc107' }} />
            </Box>
            <Typography>{rate}</Typography>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};
