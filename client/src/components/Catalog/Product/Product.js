import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";

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

  return (
   <a href={link} target="_blank" rel="noreferrer" className={classes.link}>
    <Card className={classes.card} variant="outlined">
      {condition === "new" ? (
        <Typography
          variant="body2"
          align="right"
          className={classes.conditionType}
          style={{ color: "#64dd17" }}
        >
          Nuevo
        </Typography>
      ) : (
        <Typography
          variant="body2"
          align="right"
          className={classes.conditionType}
          style={{ color: "#ff6d00" }}
        >
          Usado
        </Typography>
      )}
      <CardMedia image={thumbnail} className={classes.cardMedia} />
      <Divider />
      <CardContent className={classes.cardContent}>
        <div className={classes.price}>
          <Typography className={classes.currency}>{currency_id}</Typography>
          <Typography variant="h6" className={classes.realPrice}>
            ${price}
          </Typography>
        </div>
        <Typography variant="subtitle2" gutterBottom>
          {title.length > 60 ? title.substring(60, 0) + "..." : title}
        </Typography>
        <Typography variant="caption" className={classes.stock}>
          Stock disponible: {stock} unidades
        </Typography>
      </CardContent>
    </Card>
  </a>
  );
};

export default ProductCard;
