import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
import useStyles from "./styles";

import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const classes = useStyles();

  const {
    title,
    price,
    stock,
    thumbnail,
    condition,
    currency_id,
    link,
  } = product;

  const preventDefault = (event) => event.preventDefault();

  return (
    <Card className={classes.card}>
      <Typography
        variant="body2"
        align="right"
        className={classes.conditionType}
      >
        {condition === "new" ? "Nuevo" : "Usado"}
      </Typography>
      <CardMedia image={thumbnail} className={classes.cardMedia} />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1">
          {title.length > 20 ? title.substring(20, 0) + "..." : title}
        </Typography>
        <div className={classes.price}>
          <Typography variant="body1" className={classes.priceStyle}>
            {currency_id}
          </Typography>
          <Typography variant="body1" className={classes.priceStyle}>
            ${price}
          </Typography>
        </div>
        <Typography variant="caption" className={classes.stock}>
          Stock disponible: {stock} unidades
        </Typography>
        <Typography variant='body1' className={classes.linkTypo}>
          <a href={link}  target="_blank" className={classes.link}>Ver producto</a>
        </Typography>
     </CardContent>
    </Card>
  );
};

export default ProductCard;
