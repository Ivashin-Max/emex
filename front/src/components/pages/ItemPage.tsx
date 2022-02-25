import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GET_ONE_BY_ID from '../../queries/tyres/GET_ONE_BY_ID';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function BasicGrid() {
  const { loading, error, data } = useQuery(GET_ONE_BY_ID, { variables: { amount: 1 } });
  if (data) console.log(data.findOneTyre);

  if (loading) return (
    <h1>Gruzim</h1>
  )
  return (
    <>
      {data &&
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 245 }}>
                <CardActionArea       >
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../../static/img/${data.findOneTyre.__typename}.jpg`)}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      fsdfsf
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      sdfsdfsdf
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>

                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ ml: 0.1 }}
                  // onClick={handleClick}
                  >

                    <AddShoppingCartIcon color="info" />
                  </IconButton>
                  <Typography gutterBottom variant="body2" color="text.secondary" >
                    {data.findOneTyre.price}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
          </Grid>
        </Box>}
    </>
  );
}