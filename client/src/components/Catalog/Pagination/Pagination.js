import { useState, useEffect } from "react";
import { Pagination } from "@material-ui/lab";

import useStyles from "./styles";

const PagesControl = ({ totalPages, paginate }) => {
  const classes = useStyles();

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [totalPages]);

  const handleChange = (event, value) => {
    setPage(value);
    paginate(value);
  };
  return (
    <>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        className={classes.root}
        size="large"
        color='primary'
      />
    </>
  );
};

export default PagesControl;
