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
    <Card className={classes.card} variant="outlined">
      {condition === "new" ? (
        <Typography
          variant="body2"
          align="right"
          className={classes.conditionType}
          style={{ color: "green" }}
        >
          Nuevo
        </Typography>
      ) : (
        <Typography
          variant="body2"
          align="right"
          className={classes.conditionType}
          style={{ color: "orange" }}
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
        <Typography variant="body2" gutterBottom>
          {title.length > 60 ? title.substring(60, 0) + "..." : title}
        </Typography>
        <Typography variant="caption" className={classes.stock}>
          Stock disponible: {stock} unidades
        </Typography>
        <Typography variant="body1" className={classes.linkTypo}>
          <a href={link} target="_blank" className={classes.link}>
            Ver producto
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
