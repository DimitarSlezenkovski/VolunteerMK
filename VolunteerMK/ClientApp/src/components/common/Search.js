import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import { Button } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const source = ["John", "Doe", "John Doe", "Don", "Johe", "Hose"];

const Search = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(source);
  }, []);

  return (
    <Grid >
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar
          dataSource={source}
          onChange={(value) => setDataSource(value)}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            maxWidth: 800,
          }}
        />
        <Button variant="contained">
          Sort
          <SortIcon />
        </Button>
      </Grid>
    </Grid>
  );
};
export default Search;
