import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    marginBottom: 10,
  },
  list: {
    width: 400,
  },
  listItem: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    width: 190,
  },
  listIcon: {
    width: 20,
    heigth: 20,
    marginRight: 5,
  },
  collapse: {
    width: 200,
  },
}));
