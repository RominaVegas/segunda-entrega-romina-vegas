import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 280 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {item.price} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="outlined">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
