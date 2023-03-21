import React, { useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageCourses } from "../../redux/store/slices/courses/getAllCourses";
import Cards from "../card/Cards";
import Filters from "../../components/filters/Filters";

const Paged = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const handleChange = (e, p) => {
    setPage(p);
  };
  
  useEffect(() => {
    dispatch(changePageCourses(page));
    console.log("courses 1:", courses);
  }, [dispatch,page]);
  const courses = useSelector((state) => state.courses.list);

  return (
    <>
      <Box sx={{width:'100%', display:'flex', flexWrap:'wrap', mt:'5rem', justifyContent:'center'}}>
      {courses.length && courses.map((course) => {
        return (
            <Cards
              id={course.id}
              name={course.name}
              tags={course.tags[0]}
              image={course.image}
              key={course.id}
              level={course.level}
            />
          );
        })}
      </Box>
      <Box sx={{ display:'flex', width: '100%', justifyContent:'center', mt:'5rem'}}>
        <Pagination
          count={3}
          color="standard"
          onChange={handleChange}
          variant="outlined"
        />
      </Box>    
      <Box>
        <Filters/>
      </Box>
    </>
  );
};

export default Paged;
