import {
    Card,
    CardMedia,
    CardContent,
    CardHeader,
    Typography,
    Button,
    Chip,
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
      <Card className={classes.card}>
        <Typography align='right' variant='body1' className={classes.condition}>
          {condition === "new" ? "Nuevo" : "Usado"}
        </Typography> 
  
        <CardMedia image={thumbnail} className={classes.cardMedia} />
        <CardContent className={classes.cardContent}>
          <Typography variant='subtitle2'>
            {title.length > 30 ? title.substring(30, 0) + "..." : title}
          </Typography>
          <div className={classes.price}>
            <Typography variant='body2'>{currency_id}</Typography>
            <Typography variant='body2'>{price}</Typography>
          </div>
          <Typography variant='caption'>
            Stock disponible: {stock} unidades
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default ProductCard;
  