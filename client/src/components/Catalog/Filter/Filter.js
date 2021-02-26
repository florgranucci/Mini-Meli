import { useState } from "react";
import {
  Grid,
  FormControl,
  MenuItem,
  FormLabel,
  Select,
} from "@material-ui/core";

import useStyles from "./styles";

const Filter = ({ categories, handleCategory, handleCondition, handlePrice }) => {
  const classes = useStyles();


  return (
    <Grid container xs={12} justify='center' spacing={4} className={classes.root}>
      <Grid item>
        <FormControl>
          <FormLabel>Filtrar por categoria</FormLabel>
          <Select
             defaultValue=""
             id="grouped-select"
            onChange={handleCategory}
            className={classes.selectUno}>
            {categories &&
              categories.map((c) => (
                <MenuItem value={c.id} key={c.id}>
                  {c.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <FormLabel>Filtrar por precio</FormLabel>
          <Select
           defaultValue=""
           id="grouped-select"
            onChange={handlePrice}
            className={classes.selects}>
                <MenuItem value='ascendent'>
                  Precio mas bajo
                </MenuItem>
                <MenuItem value='descendent'>
                  Precio mas alto
                </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <FormLabel>Filtrar por condicion</FormLabel>
          <Select
            defaultValue=""
            id="grouped-select"
            onChange={handleCondition}
            className={classes.selects}>
                <MenuItem value='new'>
                  Nuevo
                </MenuItem>
                <MenuItem value='used'>
                  Usado
                </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Filter;
