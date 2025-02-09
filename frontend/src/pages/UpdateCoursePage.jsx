// src/pages/UpdateCoursePage.jsx
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/";

function UpdateCoursePage({ setCourses }) {
  const [courseId, setCourseId] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const updateCourse = () => {
    const updatedCourse = { code: courseCode, title: courseTitle };

    axios.put(API_URL + `courses/${courseId}`, updatedCourse)
      .then((response) => {
        console.log("Course updated:", response.data);
        setCourses((courses) =>
          courses.map((course) =>
            course.id === response.data.id ? response.data : course
          )
        );
      })
      .catch((error) => {
        console.error("Error updating course:", error);
      });
  };

  return (
    <div>
      <h1>Update Course</h1>
      <input
        type="text"
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course Code"
        value={courseCode}
        onChange={(e) => setCourseCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course Title"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button onClick={updateCourse}>Update</button>
    </div>
  );
}

export default UpdateCoursePage;