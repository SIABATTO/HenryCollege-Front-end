import React, { useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageCourses } from "../../redux/store/slices/courses/getAllCourses";
import Cards from "../card/Cards";

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
      <div >
      {courses.length && courses.map((course) => {
        return (
          <div key={course.id}>
            <Cards
              id={course.id}
              name={course.name}
              tags={course.tags}
              image={course.image}
              key={course.id}
              level={course.level}
            />
          </div>
          );
        })}
      </div>
      <h1>Esta pagina es {page}</h1>
      <Box sx={{ display:'flex', width: '100%', justifyContent:'center'}}>
        <Pagination
          count={3}
          color="standard"
          onChange={handleChange}
          variant="outlined"
        />
      </Box>    
    </>
  );
};

export default Paged;
