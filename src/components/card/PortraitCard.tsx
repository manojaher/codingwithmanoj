import React from 'react';
import { CardMedia, CardContent, Typography, Card, Stack } from '@mui/material';

const PortraitCard = () => {
  return (
    <Card className="portraitCard">
      <Stack spacing={0.5} className="cardBtn">
        <CardMedia
          className="img"
          component="img"
          image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
        />
        <CardContent className="cardContent">
          <Typography className="cardTitle" gutterBottom component="span">
            <b>SwiftUI Task Modifier Lifecycle Handling</b>
          </Typography>
          <Typography className="description">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
          <Stack className="cardFooter">
            <Typography className="date">Auguest 20, 2022</Typography>
            <Typography className="tag">Technology</Typography>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default PortraitCard;
