import React, { useState, useEffect } from "react";
// import Axios from "axios";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const DataFixedAssets = (props) => {
  const [fixedAssets, setFixedAssets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFixedAssets(props.Data);
  }, [props.Data]);

  useEffect(() => {
    const dataQuery = filterData(searchQuery, props.Data);
    setFixedAssets(dataQuery);
  }, [searchQuery]); // eslint-disable-line

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter(
        (d) =>
          d.Description.toLowerCase().includes(query) ||
          d.FixedAssetCode.toLowerCase().includes(query) ||
          d.Location.toLowerCase().includes(query)
      );
    }
  };

  const btnOnClickEditHandler = (id) => {
    navigate(`/EditSelected/${id}`);
  };

  const btnOnClickAddHandler = () => {
    navigate(`/Add`);
  };

  const btnOnClickDeleteHandler = (id) => {
    navigate(`/DeleteSelected/${id}`);
  };

  return (
    <>
      <Box
        sx={{
          width: "80%",
          padding: "2em",
          margin: "auto",
          marginTop: "2em",
          backgroundColor: "#abdbe3",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Fixed Assets List</Typography>
          </Grid>

          <Grid item xs={8}>
            <Button
              variant="contained"
              size="medium"
              onClick={btnOnClickAddHandler}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs={4} alignContent="flex-end">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table size="small" padding="normal">
                <TableHead>
                  <TableRow
                    sx={{
                      "& th": {
                        color: "white",
                        backgroundColor: "#063970",
                      },
                    }}
                  >
                    <TableCell>ID</TableCell>
                    <TableCell>Code</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Purchase Date</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fixedAssets.map((row) => (
                    <TableRow key={row.FixedAssetId}>
                      <TableCell>{row.FixedAssetId}</TableCell>
                      <TableCell>{row.FixedAssetCode}</TableCell>
                      <TableCell>{row.Description}</TableCell>
                      <TableCell>{row.Location}</TableCell>
                      <TableCell align="right">
                        {row.Amount.toLocaleString("id")}
                      </TableCell>
                      <TableCell align="right">
                        {row.PUrchaseDate.slice(0, 10)}
                      </TableCell>
                      <TableCell>
                        <Stack spacing={2} direction="row">
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={() =>
                              btnOnClickEditHandler(row.FixedAssetId)
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            color="error"
                            onClick={() =>
                              btnOnClickDeleteHandler(row.FixedAssetId)
                            }
                          >
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DataFixedAssets;
