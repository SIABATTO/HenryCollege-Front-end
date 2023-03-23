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
<<<<<<< HEAD
  }, [dispatch,page]);
  const courses = useSelector((state) => state.reducer.courseState.list);
=======
  }, [dispatch, page]);
  const courses = useSelector((state) => state.courses.list);
>>>>>>> detail

  return (
    <>
      <Box
        sx={{
          display: "flex",
          m: "2rem",
          width: "100%",
          justifyContent: "center",
          mt: "2rem",
        }}
      >
        <Pagination
          count={3}
          color="tertiary"
          onChange={handleChange}
          variant="outlined"
          justifycontent="center"
        />
      </Box>
      
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          m: "3rem",
          justifyContent: "center",
        }}
      >
        {Array.isArray(courses) &&
          courses.length > 0 &&
          courses.map((course) => (
            <Cards
              id={course.id}
              name={course.name}
              tags={course.tags[0]}
              image={course.image}
              key={course.id}
              level={course.level}
            />
          ))}
      </Box>
    </>
  );
};

export default Paged;
