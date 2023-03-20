import axios from "axios";
import { setcoursesList, postCourses, getCourseById, getCourseByName } from ".";

const URL = "http://localhost:3001";

//Get All Courses

export const getAllCourses = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/course`);
      console.log("courses response data: ", res.data);
      dispatch(setcoursesList(res.data));
    } catch (error) {
      console.log("error_redux", error);
    }
  };
};

//Post a new Course

export const postNewCourse = (course) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/course`, course);
      dispatch(postCourses(response.data));
      alert("Curso nuevo publicado exitosamente");
    } catch (error) {
      console.log("error_redux", error);
    }
  };
};

//Get courses by ID

export const getCoursesById = (id) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/course/${id}`);
      dispatch(getCourseById(res.data));
    } catch (error) {
      console.log("error_redux", error);
    }
  };
};

//Get courses by Name

export const getCoursesByName = (name) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/course?name_like=${name}`);
      dispatch(setcoursesList(res.data));
    } catch (error) {
      console.log("error_redux", error);
    }
  };
};
