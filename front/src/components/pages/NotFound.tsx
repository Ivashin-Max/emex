import { Stack, Button, Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (

    <main>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Ошибка 404
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Страницы с таким адресом не существует
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={Link}
              to='/'
              variant="contained"
            >Вернуться на главную</Button>
          </Stack>
        </Container>
      </Box>

    </main>

  );
}