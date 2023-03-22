import React, { useEffect, useState } from "react";
import { InputLabel, Select } from "@material-ui/core";
import Style from "./../filters/Filter.module.css";
import { FormControl, Grid, MenuItem, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllCourses,
  filtersByAlpha,
  filtersByLevel,
  filtersByMin,
} from "../../redux/store/slices/courses/getAllCourses";

const Filters = () => {
  const selectWidth = "50%";
  const dispatch = useDispatch();
  //const Students = useSelector((state) => state.Students);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  const filterCreator = (element) => {
    if (element.target.value === "all")
      dispatch(getAllCourses(element.target.value));
  };
  const filterAlpha = (element) => {
    if (element.target.value === "asc")
      dispatch(filtersByAlpha(element.target.value));
    if (element.target.value === "desc")
      dispatch(filtersByAlpha(element.target.value));
  };
  const filterLevel = (element) => {
    dispatch(filtersByLevel(element.target.value));
  };

  const filtersMin = (element) => {
    if (element.target.value === "duration")
      dispatch(filtersByMin(element.target.value));
  };

  return (
    <Box
      container
      spacing={5}
      display="inline-flex"
      flexDirection="row"
      justifycontent="center"
      alignItems="center"
    >
      <Box item xs={5}>
        <FormControl
          className={`${Style.customSelect}`}
          style={{ width: selectWidth }}
        >
          <InputLabel id="select-label">Name Of Course</InputLabel>
          <Select
            onChange={filterCreator}
            className={`${Style.customSelect}  ${Style.customSelect}`}
            labelId="select-label"
            id="select"
          >
            <MenuItem value="all">All</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box item xs={5}>
        <FormControl
          className={`${Style.MuiFormControl} ${Style.root}`}
          style={{ width: selectWidth }}
        >
          <InputLabel id="segundo-select-label">Alphabetical</InputLabel>
          <Select
            onChange={filterAlpha}
            className={`${Style.MuiSelect} ${Style.root} ${Style.customSelect}`}
            labelId="segundo-select-label"
            id="segundo-select"
          >
            <MenuItem value="asc">Ascending (A-Z)</MenuItem>
            <MenuItem value="desc">Descending (Z-A)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box item xs={5}>
        <FormControl
          className={`${Style.MuiFormControl} ${Style.root}`}
          style={{ width: selectWidth }}
        >
          <InputLabel id="tercer-select-label">Level</InputLabel>
          <Select
            onChange={filterLevel}
            className={`${Style.MuiSelect} ${Style.root} ${Style.customSelect}`}
            labelId="tercer-select-label"
            id="tercer-select"
          >
            <MenuItem value="Basico">Basico</MenuItem>
            <MenuItem value="intermedio">intermedio </MenuItem>
            <MenuItem value="alto">alto</MenuItem>
          </Select>
          </FormControl>
          </Box>

          <Box>
          <FormControl
          className={`${Style.MuiFormControl} ${Style.root}`}
          style={{ width: selectWidth }}
        >
          <InputLabel>duration</InputLabel>
          <Select
            onChange={filtersMin}
            className={`${Style.MuiSelect} ${Style.root} ${Style.customSelect}`}
            labelId="tercer-select-label"
            id="tercer-select"
          >
            <MenuItem value="min">min</MenuItem>
            <MenuItem value="max">mix</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </Box>

  );
};

export default Filters;
