import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import MyCard from "../Card/Cards";
import styles from "./CardContainer.module.css";
import { getAllCourses } from "../../redux/store/slices/courses/getAllCourses";
import Cards from "../card/Cards";

const CardsContainer = ({ id, name, image, level, tags }) => {
  const dispatch = useDispatch();
  // const courses = useSelector((state) => state.courses.list);
  // const isLoading = useSelector((state) => state.courses.isLoading);

  // useEffect(() => {
  //   dispatch(getAllCourses());
  //   console.log("courses 1:", courses);
  // }, [dispatch]);

  return (
    <div className={styles.container}>
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
  );
};

export default CardsContainer;
