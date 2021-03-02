import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f5f5f5',
    "&:hover": {
      backgroundColor: '#f5f5f5',
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: 900,
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "80ch",
      },
    },
  },
  inputRoot: {
    color: 'black',
  },
}));