// import { useSelector } from "react-redux";
import MyCard from "../Card/Cards";

const CardsContainer = ({ id, name, image }) => {
  // const Courses = useSelector((state) => state.allCourses);

  return (
    <div>
      <MyCard  id={id} name={name} image={image} key={id} />
    </div>
  );
};

export default CardsContainer;