import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    boxShadow: "none",
    backgroundColor: "#FFF159",
    margin: 0,
  },

  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    color: "black",
  },
  logo: {
    height: 40,
    marginLeft: 5
  }

}));