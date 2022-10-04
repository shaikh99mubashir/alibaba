// import React from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const MainCard = (props) => {
    const {image, category, title,price,rate} = props;
  return (
    <Card sx={{ maxWidth: 200 }}>
    <CardMedia
      component="img"
      height="200"
      width="150"
      image={image}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {category}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">{price}</Button>
      <Button size="small">{rate}</Button>
    </CardActions>
  </Card>
  )
}

export default MainCard
