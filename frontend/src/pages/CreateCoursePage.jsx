import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/";

function CreateCoursePage({ setCourses }) {
  const [courseCode, setCourseCode] = useState(null);
  const [courseTitle, setCourseTitle] = useState(null);

  const createCourse = () => {
    const course = {
      code: courseCode,
      title: courseTitle,
    };

    axios
      .post(API_URL + "courses", course)
      .then((response) => {
        console.log("Course created:", response.data);
        setCourses((courses) => [...courses, response.data]);
      })
      .catch((error) => {
        console.error("Error creating course:", error);
      });
  };

  const onCourseCodeChange = (event) => {
    setCourseCode(event.target.value);
  };

  const onCourseTitleChange = (event) => {
    setCourseTitle(event.target.value);
  };

  return (
    <div>
      <h1>Create Course</h1>
      <input
        type="text"
        placeholder="Course Code"
        onChange={onCourseCodeChange}
      />
      <input
        type="text"
        placeholder="Course Title"
        onChange={onCourseTitleChange}
      />
      <button onClick={createCourse}>Submit</button>
    </div>
  );
}

export default CreateCoursePage;
