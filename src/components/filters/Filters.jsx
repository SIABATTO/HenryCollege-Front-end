import React, { useEffect, useState } from "react";
import { InputLabel, Select } from "@material-ui/core";
import Style from "./../filters/Filter.module.css";
import { FormControl, Button, MenuItem, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllCourses,
  filtersByAlpha,
  filtersByLevel,
  filtersByMin,
} from "../../redux/store/slices/courses/getAllCourses";

const Filters = () => {
  const dispatch = useDispatch();
  const [selectGetAll, setSelectGetAll] = useState("");
  const [SelectFilterAlpha, setSelectFilterAlpha] = useState("");
  const [SelectFilterLevel, setSelectFilterLevel] = useState("");
  const [SelectFilterMaxMin, setSelectFilterMaxMin] = useState("");

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  const filterGetAll = (element) => {
    setSelectGetAll(element.target.value);
    if (element.target.value === "all") return dispatch(getAllCourses());
    dispatch(getAllCourses(element.target.value));
  };

  const filterAlpha = (element) => {
    setSelectFilterAlpha(element.target.value);
    if (element.target.value === "asc")
      dispatch(filtersByAlpha(element.target.value));
    if (element.target.value === "desc")
      dispatch(filtersByAlpha(element.target.value));
  };

  const filterLevel = (element) => {
    setSelectFilterLevel(element.target.value);
    dispatch(filtersByLevel(element.target.value));
  };

  const filterMaxMin = (element) => {
    setSelectFilterMaxMin(element.target.value);
    if (element.target.value === "duration")
      dispatch(filtersByMin(element.target.value));
  };

  const clearAllFilters = () => {
    setSelectGetAll("");
    setSelectFilterAlpha("");
    setSelectFilterLevel("");
    setSelectFilterMaxMin("");
    dispatch(getAllCourses());
  };

  return (
    <Box
      spacing={2}
      display="inline-flex"
      flexDirection="row"
      justifycontent="space-around"
      alignItems="center"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
        mt: "3rem",
      }}
      color="tertiary"
    >
      <Box>
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
          <InputLabel id="demo-select-small">Ver cursos</InputLabel>
          <Select
            onChange={filterGetAll}
            labelId="demo-select-small"
            id="fdemo-select-small"
            autoWidth
            label="filterType"
            value={selectGetAll}
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value="all">Todos</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="filterAlpha">Alfabeticamente</InputLabel>
          <Select
            onChange={filterAlpha}
            labelId="filterAlpha"
            id="filterAlpha"
            autoWidth
            label="filterAlpha"
            value={SelectFilterAlpha}
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value="asc">Ascending (A-Z)</MenuItem>
            <MenuItem value="desc">Descending (Z-A)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="tercer-select-label">Nivel</InputLabel>
          <Select
            onChange={filterLevel}
            labelId="tercer-select-label"
            id="tercer-select-label"
            autoWidth
            label="tercer-select-label"
            value={SelectFilterLevel}
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value="Basico">Basico</MenuItem>
            <MenuItem value="intermedio">intermedio </MenuItem>
            <MenuItem value="alto">alto</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <FormControl
          sx={{ m: 1, minWidth: 150 }}
          label="Duración"
          type="text"
          variant="outlined"
          color="tertiary"
        >
          <InputLabel id="cuarto-select-label">Duración</InputLabel>
          <Select
            onChange={filterMaxMin}
            labelId="cuarto-select-label"
            id="cuarto-select-label"
            autoWidth
            label="cuarto-select-label"
            value={SelectFilterMaxMin}
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value="min">min</MenuItem>
            <MenuItem value="max">max</MenuItem>
          </Select>
        </FormControl>

        <Button
          sx={{
            mr: 2,
            mt: 2,
            bgcolor: "#212121",
            "&:hover": {
              bgcolor: "#F0F0F0",
              color: "#000000",
            },
            color: "#fffde7",
            height: "40px",
            width: "150px",
          }}
          color="primary"
          onClick={clearAllFilters}
        >
          Borrar filtros
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;
