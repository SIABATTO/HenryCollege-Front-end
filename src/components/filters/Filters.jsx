import React from 'react';
import { InputLabel, Select } from '@material-ui/core';
import Style from './../filters/Filter.module.css';
import { FormControl, Grid, MenuItem } from '@mui/material';

function Filters() {
  const selectWidth = '40%'; // Set the width value here

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <FormControl className={`${Style.MuiFormControl} ${Style.root}`} style={{ width: selectWidth }}>
          <InputLabel id="select-label">Name Of Course</InputLabel>
          <Select
            className={`${Style.MuiSelect} ${Style.root} ${Style.customSelect}`}
            labelId="select-label"
            id="select"
          >
            <MenuItem value="option1">Opción 1</MenuItem>
            <MenuItem value="option2">Opción 2</MenuItem>
            <MenuItem value="option3">Opción 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={`${Style.MuiFormControl} ${Style.root}`} style={{ width: selectWidth }}>
          <InputLabel id="segundo-select-label">Duration</InputLabel>
          <Select
            className={`${Style.MuiSelect} ${Style.root} ${Style.customSelect}`}
            labelId="segundo-select-label"
            id="segundo-select"
          >
            <MenuItem value="option1">Opción 1</MenuItem>
            <MenuItem value="option2">Opción 2</MenuItem>
            <MenuItem value="option3">Opción 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={`${Style.MuiFormControl} ${Style.root}`} style={{ width: selectWidth }}>
          <InputLabel id="tercer-select-label">Level</InputLabel>
          <Select
            className={`${Style.MuiSelect} ${Style.root} ${Style.customSelect}`}
            labelId="tercer-select-label"
            id="tercer-select"
          >
            <MenuItem value="option1">Opción 1</MenuItem>
            <MenuItem value="option2">Opción 2</MenuItem>
            <MenuItem value="option3">Opción 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={`${Style.MuiFormControl} ${Style.root}`} style={{ width: selectWidth }}>
          <InputLabel id="cuarto-select-label">Price</InputLabel>
          <Select
            className={`${Style.MuiSelect} ${Style.root} ${Style.customSelect}`}
            labelId="cuarto-select-label"
            id="cuarto-select"
          >
            <MenuItem value="option1">Opción 1</MenuItem>
            <MenuItem value="option2">Opción 2</MenuItem>
            <MenuItem value="option3">Opción 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default Filters;