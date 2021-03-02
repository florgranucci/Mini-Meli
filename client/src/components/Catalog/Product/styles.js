import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    width: "284px",
    maxWidth: "284px",
    height: '473px',
    margin: 10,
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)"
    },
  },
  cardMedia: {
    height: '284px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: "contain",
  },
  cardContent: {
    height: "161px",
  },
  price: {
    display: "flex",
    alignItems: "center",
    width: 105,
    marginBottom: 8,
  },
  realPrice: {
    marginLeft: 5,
  },
  currency: {
    fontSize: ".8rem",
  },
  conditionType: {
    padding: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  link: {
    cursor: "pointer",
    textDecoration: "none",
  },
  linkTypo: {
    marginTop: 25,
  },
  stock: {
    fontWeight: "600",
  },
}));
