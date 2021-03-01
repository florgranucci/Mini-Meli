import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 50,
  },
  list: {
    maxWidth: 360,
  },
  listItems: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer'
  }
}));
