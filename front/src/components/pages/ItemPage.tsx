import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GET_ONE_BY_ID from '../../queries/GET_ONE_BY_ID';
import { FetchItem } from '../../types/queries';
import { RUB_CHAR } from '../../types/items';
import { useDispatch } from 'react-redux';
import { changeBasket } from '../../store/actions/changeBasket';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function BasicGrid() {
  let location = useLocation();
  const currentItem = location.search.split('=')[1];
  const { loading, error, data } = useQuery<FetchItem>(GET_ONE_BY_ID, { variables: { id: +currentItem } });
  const dispatch = useDispatch();
  const handleClick = () => {
    if (data?.findOne) dispatch(changeBasket(data.findOne, '+'))
  }
  const checkType = (item: FetchItem) => {
    return item.findOne.type
  }

  if (loading) return (
    <h1>Gruzim</h1>
  )
  return (
    <>

      {data &&
        <Box sx={{ flexGrow: 1, p: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="440"
                  image={require(`../../static/img/${data.findOne.itemtype}.jpg`)}
                  alt="green iguana"
                />
              </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item>
                <Typography gutterBottom variant="body2" color="text.secondary" >
                  Информация о товаре:
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.secondary" >
                  Бренд: {data.findOne.brand}
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.secondary" >
                  Название: {data.findOne.name}
                </Typography>
                <Typography gutterBottom align='left' variant="body2" color="text.secondary" >
                  Тип: {checkType(data)}
                </Typography>
                {/* <Typography gutterBottom align='left' variant="body2" color="text.secondary" >
                  {data.findOne.special}
                </Typography> */}
                <Typography gutterBottom align='left' variant="body2" color="text.secondary" >
                  Цена: {data.findOne.price} {RUB_CHAR}
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ ml: 0.1 }}
                    title="Добавить в корзину"
                    onClick={handleClick}
                  >
                    <AddShoppingCartIcon color="info" />
                  </IconButton>
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>}
    </>
  );
}