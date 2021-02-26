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
      marginTop: 7
  },
  condition: {
    margin: 8
  }

}));