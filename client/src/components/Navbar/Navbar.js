import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";

import Searchbar from "./Searchbar/Searchbar";
import logo from '../../assets/logo.png';

const Navbar = ({ onSearch }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={logo} className={classes.logo}/>
            MINI-MELI
          </Typography>
          <Searchbar onSearch={onSearch} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;