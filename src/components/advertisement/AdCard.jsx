import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
// import { CardActionArea } from '@mui/material';

export default function AdCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{width:"200px", marginBottom:"20px"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.adBy}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}