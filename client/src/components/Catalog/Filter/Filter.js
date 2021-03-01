import { useState } from "react";
import {
  Grid,
  Collapse,
  ListItemText,
  ListItem,
  List,
} from "@material-ui/core";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import useStyles from "./styles";

const Filter = ({ handleCondition, handlePrice }) => {
  const classes = useStyles();
  const [dense, setDense] = useState(true);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container justify="center" className={classes.root} wrap="wrap">
      <Grid item xs={6}>
        <List dense={dense} className={classes.list}>
          <div style={{ display: "flex" }}>
            <ListItem
              component="button"
              onClick={() => handlePrice("ascendent")}
              className={classes.listItem}
            >
              <ArrowDownwardIcon className={classes.listIcon} />
              <ListItemText primary="Precio más bajo" />
            </ListItem>
            <ListItem
              component="button"
              onClick={() => handlePrice("descendent")}
              className={classes.listItem}
            >
              <ArrowUpwardIcon className={classes.listIcon} />
              <ListItemText primary="Precio más alto" />
            </ListItem>
          </div>
        </List>
      </Grid>
      <Grid item container xs={5} justify="flex-end">
        <List dense={dense} className={classes.collapse}>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Filtrar por condición" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List dense={dense} component="div" disablePadding>
              <ListItem button onClick={() => handleCondition("new")}>
                <ListItemText primary="Nuevo" />
              </ListItem>
              <ListItem button onClick={() => handleCondition("used")}>
                <ListItemText primary="Usado" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Grid>
    </Grid>
  );
};

export default Filter;
