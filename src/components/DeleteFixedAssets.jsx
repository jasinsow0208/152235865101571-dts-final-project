import React, { useState, useEffect } from "react";
import { Grid, Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const DeleteFixedAssets = (props) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setData(props.Data);
  }, [props.Data]);

  const btnOnClickCancelHandler = () => {
    navigate("/");
  };

  const fetchData = async () => {
    try {
      await Axios({
        method: "POST",
        headers: { "Content-type": "application/json" },
        url: `https://famanagement.azurewebsites.net/api/Values/${data.FixedAssetId}`,
        withCredentials: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const btnOnClickDeleteHandler = () => {
    fetchData();
    navigate("/");
  };

  console.log(props.Data);
  return (
    <div>
      <Box
        sx={{
          width: "60%",
          padding: "4em",
          margin: "auto",
          marginTop: "2em",
          backgroundColor: "#abdbe3",
          alignContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Do you want delete this item?</Typography>
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Code:</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              id={data.FixedAssetId}
              variant="outlined"
              value={data.FixedAssetCode}
              //   onChange={handleChangeCode}
            />
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Description:</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              id={props.Data.FixedAssetId}
              variant="outlined"
              value={data.Description}
              //   onChange={handleChangeDescription}
            />
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Location:</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              id={props.Data.FixedAssetId}
              variant="outlined"
              value={data.Location}
              //   onChange={handleChangeLocation}
            />
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Amount:</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              id={props.Data.FixedAssetId}
              variant="outlined"
              value={data.Amount}
              //   onChange={handleChangeAmount}
            />
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Purchase Date:</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              id={props.Data.FixedAssetId}
              variant="outlined"
              value={data.PUrchaseDate}
              //   onChange={handleChangePurchaseDate}
            />
          </Grid>
          <Grid item xs={2} alignContent="flex-end"></Grid>
          <Grid item xs={10}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="error"
                onClick={btnOnClickDeleteHandler}
              >
                Delete
              </Button>
              <Button variant="contained" onClick={btnOnClickCancelHandler}>
                Cancel
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DeleteFixedAssets;
