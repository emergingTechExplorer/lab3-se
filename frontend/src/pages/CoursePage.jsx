import { useEffect, useState } from "react";
import axios from "axios";
import CreateCoursePage from "./CreateCoursePage";
import DeleteCoursePage from "./DeleteCoursePage";
import UpdateCoursePage from "./UpdateCoursePage";

const API_URL = "http://localhost:8080/api/";

function CoursePage() {
  const [courses, setCourses] = useState([]);

  const renderCourses = (courses) => {
    return (
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.id}, {course.code}, {course.title}
          </li>
        ))}
      </ul>
    );
  };

  const getCourses = async () => {
    try {
      const response = await axios.get(API_URL + "courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <h1>Course Dashboard</h1>
      <div> {renderCourses(courses)} </div>
      <CreateCoursePage setCourses={setCourses} />
      <UpdateCoursePage setCourses={setCourses} />
      <DeleteCoursePage getCourses={getCourses} />
    </>
  );
}

export default CoursePage;
