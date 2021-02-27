import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    width: 250,
    maxWidth: 250,
    height: 350,
    margin: 5
  },
  cardMedia: {
      width: 200,
      maxWidth: 200,
      height: 150,
      backgroundSize: 'contain'
  },
  cardContent: {
      height: 100
  },
  price: {
      display: 'flex',
      width: 90,
      justifyContent: 'space-around'
  },
  priceStyle: {
    fontWeight: 'bold',
  },
  conditionType: {
    padding: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#2968C8',
    padding: 8,
  },
  linkTypo: {
    marginTop: 15
  },
  

}));