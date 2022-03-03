
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

export default function RolePage() {
  return (

    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Выберите роль
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={Link}
              to='/admin'
              variant="contained"
            >Администратор
            </Button>
            <Button
              component={Link}
              to='/user'
              variant="contained"
            >Пользователь
            </Button>
          </Stack>
        </Container>
      </Box>

    </main>

  );
}