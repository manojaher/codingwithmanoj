import { Avatar, Box, Button, Grid2, Stack, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Grid2 container className="banner" spacing={4}>
      <Stack className="avatarContainer">
        <Avatar className="avatar" src="/assets/images/ProfilePicture.jpg" />
        <Box>
          <b>Manoj Aher</b>
          <Typography className="role">Collaborator & Editor</Typography>
        </Box>
      </Stack>
      <Box className="content">
        <Typography component="p">
          Meet Manoj Aher, a passionate writer and blogger with a love for
          technology and travel. Manoj holds a degree in Computer Science and
          has spent a decade working in the tech industry, gaining a deep
          understanding of the impact technology has on our lives.
        </Typography>
      </Box>
      <Box className="socialHandles">
        <Button
          className="downloadCV"
          variant="contained"
          size="medium"
          href="/assets/pdf/Manoj_Aher_iOS _Staff_Bangalore.pdf"
          download="Manoj_Aher_iOS _Staff_Bangalore.pdf"
        >
          Download CV
        </Button>
      </Box>
    </Grid2>
  );
};

export default Banner;
