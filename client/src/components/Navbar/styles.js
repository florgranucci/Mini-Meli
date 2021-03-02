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
    font:
      "'Harabara Mais','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
  },
  logo: {
    height: 40,
    marginTop: 20,
    marginBottom: 20
  }

}));