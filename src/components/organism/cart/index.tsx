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
  movieName: string;
};

export const MoviesCart = (props: CartMovies) => {
  const { image, altImage, description, movieName, rank } = props;

  const [expanded, setExpanded] = useState(false);
  const [color, setColor] = useState(<BookmarkBorderIcon />);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      {/* <Card sx={{ maxWidth: 345, background: '#B6EADA' }}>
        <CardMedia component="img" height="194" image={image} alt={altImage} />
        <CardContent>
          <Typography variant="body1" color="text.secondary" noWrap>
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <BookmarkBorderIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card> */}
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
            <Typography gutterBottom variant="h5" component="div">
              {movieName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <IconButton
            aria-label="add to favorites"
            onClick={() => setColor(<BookmarkIcon />)}
          >
            {color}
          </IconButton>
          <Box display="flex" alignItems="center">
            <Box mr="5px">
              <StarIcon sx={{ color: '#ffc107' }} />
            </Box>
            <Typography>{rank}</Typography>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};
