import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddFixedAssets = () => {
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [amount, setAmount] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const navigate = useNavigate();

  //   const loc = [
  //     { label: "Cianjur", id: "Cianjur" },
  //     { label: "Cikampek", id: "Cikampek" },
  //     { label: "Jakarta", id: "Jakarta" },
  //     { label: "Pontianak", id: "Pontianak" },
  //     { label: "Surabaya", id: "Surabaya" },
  //   ];
  const loc = ["Cianjur", "Cikampek", "Jakarta", "Pontianak", "Surabaya"];

  const btnOnClickCancelHandler = () => {
    navigate("/");
  };

  const fetchData = async () => {
    try {
      await Axios({
        method: "POST",
        headers: { "Content-type": "application/json" },
        url: `https://famanagement.azurewebsites.net/api/Values?FixedAssetCode=${code}&Description=${description}&Location=${location}&Amount=${amount}&PurchaseDate=${purchaseDate.toLocaleDateString(
          "en-CA"
        )}`,
        withCredentials: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const btnOnClickSaveHandler = () => {
    fetchData();
    navigate("/");
  };

  const handleChangeCode = (event) => {
    setCode(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

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
            <Typography variant="h5">Add Fixed Asset</Typography>
          </Grid>

          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Code:</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              id={1}
              label="Code"
              sx={{ width: 300 }}
              variant="outlined"
              value={code}
              onChange={handleChangeCode}
            />
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Description:</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              id={1}
              label="Description"
              sx={{ width: 300 }}
              variant="outlined"
              value={description}
              onChange={handleChangeDescription}
            />
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Location:</Typography>
          </Grid>
          <Grid item xs={10}>
            <Autocomplete
              value={location}
              onChange={(event, newValue) => {
                setLocation(newValue);
              }}
              inputValue={inputLocation}
              onInputChange={(event, newInputValue) => {
                setInputLocation(newInputValue);
              }}
              id="combo-box"
              options={loc}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Location" />
              )}
            />
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Amount:</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              id={1}
              label="Amount"
              sx={{ width: 300 }}
              variant="outlined"
              value={amount}
              onChange={handleChangeAmount}
            />
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body1">Purchase Date:</Typography>
          </Grid>
          <Grid item xs={10}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                id="DateTimePicker"
                label="Purchase date"
                value={purchaseDate}
                onChange={(newValue) => {
                  setPurchaseDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: 300 }} />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={2} alignContent="flex-end"></Grid>
          <Grid item xs={10}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={btnOnClickSaveHandler}>
                Add
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

export default AddFixedAssets;
