import axios from "axios";
import { setUserList, postUser } from ".";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get("http://localhost:3001/students");
      dispatch(setUserList(res.data));
    } catch (error) {
      console.log("error_redux", error);
    }
  };
};

export const postNewUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/students", user);
      dispatch(postUser(response.data));
      alert("Registro exitoso");
    } catch (error) {
      console.log("error_redux", error);
    }
  };
};
