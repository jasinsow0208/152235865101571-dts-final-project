import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Styles from "./SearchBar.module.css";
import { Box } from "@mui/material";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <form className={Styles.formRight}>
      <Box>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          label="Search"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </Box>
    </form>
  );
};
export default SearchBar;
