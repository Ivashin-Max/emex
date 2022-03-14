
import Typography from '@mui/material/Typography';
import { Container, createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import CatalogChoice from '../CatalogChoice';

const UserPage = () => {

  return (

    <main>
      <Container sx={{ py: 6 }} maxWidth="lg">
        <Typography gutterBottom variant="h5" component="div">
          Выбор каталога:
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={4}>
            <CatalogChoice cardName='Шины' linkTo='tyre' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CatalogChoice cardName='Диски' linkTo='disk' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CatalogChoice cardName='Масло' linkTo='oil' />
          </Grid>
        </Grid>

      </Container>
    </main>

  )

};

export default UserPage



