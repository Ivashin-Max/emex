
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const theme = createTheme();
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ maxWidth: 345 }}
              >
                <CardActionArea
                  component={Link}
                  to='/catalog?name=tyres'>
                  <CardMedia
                    component="img"
                    height="250"
                    image={require('../../static/img/tyres.jpg')}
                    alt="tyres"

                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Шины
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </ Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  component={Link}
                  to='/catalog?name=disks'>
                  <CardMedia
                    component="img"
                    height="250"
                    image={require('../../static/img/disks.jpg')}
                    alt="tyres"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Диски
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </ Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  component={Link}
                  to='/catalog?name=oils'>
                  <CardMedia
                    component="img"
                    height="250"
                    image={require('../../static/img/oils.jpg')}
                    alt="tyres"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Масла
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </ Card>
            </Grid>
          </Grid>

        </Container>
      </main>

    </ThemeProvider>
  );

}

export default HomePage



