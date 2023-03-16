// import { useSelector } from "react-redux";
import MyCard from "../Card/Cards";
import styles from "./CardContainer.module.css";

const CardsContainer = ({ id, name, image, Subject, type }) => {
  // const Courses = useSelector((state) => state.allCourses);
  const course = [
    {
      image:"https://assets.soyhenry.com/logoOG.png",
      id: 1,
      curse_name: "Speech Pathologist",
      type: "Trueman",
      level: 45,
      duration: "11:46 AM",
      price: "$2.46",
      start_date: "6/8/2022",
      finish_date: "9/10/2022",
      description: "Other chondrocalcinosis, left ankle and foot",
      feedback: "Lysis of vulvar adhesions",
    },
    {
      image:"https://assets.soyhenry.com/logoOG.png",
      id: 2,
      curse_name: "Quality Engineer",
      type: "Devlin",
      level: 16,
      duration: "3:05 PM",
      price: "$9.30",
      start_date: "10/7/2022",
    },
  ];

  return (
    <div className={styles.container}>
      {course.map((course) => {
        return (
          <div key={course.id}>
            <MyCard
              id={course.id}
              name={course.curse_name}
              type={course.type}
              image={image}
              key={id}
              Subject={Subject}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
