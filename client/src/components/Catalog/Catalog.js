import { useState } from "react";

import Filter from "./Filter/Filter";
import Product from "./Product/Product";
import PagesControl from "./Pagination/Pagination";
import Header from '.././Header/Header';

import useStyles from "./styles";
import {
  Grid,
  Container,
  Typography,
  ListItem,
  List,
  ListItemText,
} from "@material-ui/core";

const CatalogContainer = ({
  products,
  categories,
  handleCondition,
  handlePrice,
  handleCategory,
  totalPages,
  paginate,
}) => {
  const classes = useStyles();
  const [dense] = useState(true);

  return (
    <>
    <Header />
    <Container maxWidth="lg" className={classes.root}>
      <Grid xs={3}>
        <List dense={dense} className={classes.list}>
          <Typography variant="h6" gutterBottom>
            Filtrar por categoría
          </Typography>
          {categories &&
            categories.map((c) => (
              <ListItem
                key={c.id}
                component="button"
                onClick={() => handleCategory(c.id)}
                className={classes.listItems}
              >
                <ListItemText primary={c.name} />
              </ListItem>
            ))}
        </List>
      </Grid>
      <Grid container direction="column" alignItems="center">
        <Filter handleCondition={handleCondition} handlePrice={handlePrice} />
        <Grid item container direction="row" justify="center" wrap="wrap">
          {!products.length ? (
            <Typography variant="h6" style={{ marginTop: 20 }}>
              No se encontraron productos
            </Typography>
          ) : (
            products.map((p) => (
              <div key={p.id}>
                <Product product={p} />
              </div>
            ))
          )}
        </Grid>
        <Grid justify="center" alignItems="center">
          <PagesControl paginate={paginate} totalPages={totalPages} />
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default CatalogContainer;
