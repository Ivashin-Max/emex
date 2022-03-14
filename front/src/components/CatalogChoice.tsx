import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';

import { CatalogChoiceProps } from '../types/props';

const CatalogChoice = (props: CatalogChoiceProps) => {
  const linkTo = `/catalog?name=${props.linkTo}`;

  return (
    <Card
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea
        component={Link}
        to={linkTo}>
        <CardMedia
          component="img"
          height="250"
          image={require(`../static/img/${props.linkTo}.jpg`)}
          alt={props.cardName}

        />
        <CardContent sx={{ bgcolor: 'grey.300' }}>
          <Typography gutterBottom variant="h5" component="div" >
            {props.cardName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ Card>
  )
}

export default CatalogChoice