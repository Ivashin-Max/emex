import { Divider, Box, Container } from '@mui/material';

import EditItemMain from '../EditItemSteper';
import AddItem from '../AddItem';


export default function AdminPage() {

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
        className="admin_page_container"
      >
        <AddItem edit={false} />
        <Divider orientation="vertical" flexItem />
        <EditItemMain />
      </Box>

    </Container>
  );
}