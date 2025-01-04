import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
} from '@mui/material';

export const BlogCard = () => {
  return (
    <Card
      className="card"
      sx={{
        '&:hover': {
          boxShadow: '4px 4px 8px 4px lightgray',
        },
        borderRadius: '10px',
        boxShadow: '0.5px 0.5px 8px lightgray',
      }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          image='https://cdn.pixabay.com/photo/2021/11/26/20/45/lantern-6826697_1280.jpg'
          alt='Lantern'
        />
        <Box sx={{ padding: '10px' }}>
          <Typography
            variant='h5'
            fontWeight='bold'
            sx={{ paddingBottom: '10px' }}
          >
            Swift UI task Modifier
          </Typography>
          <Typography sx={{ variant: 'body1' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};
