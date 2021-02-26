import { useState } from "react";

import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase, IconButton } from "@material-ui/core";

const Searchbar = ({ onSearch }) => {
  const classes = useStyles();

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </div>
        <InputBase
          placeholder="Buscar…"
          value={input}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Searchbar;