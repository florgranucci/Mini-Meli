import Filter from "./Filter/Filter";

import Product from "./Product/Product";
import PagesControl from "./Pagination/Pagination";
import { Grid, Container, Typography } from "@material-ui/core";

const CatalogContainer = ({
  products,
  categories,
  handleCondition,
  handlePrice,
  handleCategory,
  totalPages,
  paginate,
}) => {
  return (
    <>
      <Filter
        categories={categories}
        handleCategory={handleCategory}
        handleCondition={handleCondition}
        handlePrice={handlePrice}
      />
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          wrap="wrap"
        >
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            wrap="wrap"
          >
            {!products.length ? (
              <Typography variant="body2">
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
