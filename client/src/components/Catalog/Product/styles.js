import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    width: "284px",
    maxWidth: "284px",
    margin: 5,
  },
  cardMedia: {
    height: '173px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: "contain",
  },
  cardContent: {
    height: "173px",
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
    color: "white",
    backgroundColor: "#3483FA",
    padding: 8,
    borderRadius: 4,
    "&:hover": {
      backgroundColor: "#2968C8",
    },
  },
  linkTypo: {
    marginTop: 25,
  },
  stock: {
    fontWeight: "bold",
  },
}));
