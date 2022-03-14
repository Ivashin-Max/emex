
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import '../../styles/role_page.css';
import admin from '../../static/img/admin.jpg';
import user from '../../static/img/user.jpg';

export default function RolePage() {
  return (
    <>
      <div className="container">
        <Link to="/admin">
          <div className="container__item ">
            <div className="admin"></div>
            <Typography className='text' variant="h5" align="center" color="white" paragraph>
              Администратор
            </Typography>
          </div>
        </Link>
        <Link to="/user">
          <div className="container__item ">
            <div className="user"></div>
            <Typography className='text' variant="h5" align="center" color="white" paragraph>
              Пользователь
            </Typography>
          </div>
        </Link>
      </div>

    </>
  );
}