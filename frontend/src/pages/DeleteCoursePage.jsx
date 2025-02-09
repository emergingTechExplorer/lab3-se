import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:8080/api/";

function DeleteCoursePage({ getCourses }) {
  const [courseId, setCourseId] = useState("");

  const deleteCourse = () => {
    axios.delete(API_URL + `courses/${courseId}`)
      .then(() => {
        console.log("Course deleted:", courseId);
        getCourses();  // Refresh the course list from the server
        setCourseId("");  // Clear the input field
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
      });
  };

  return (
    <div>
      <h1>Delete Course</h1>
      <input
        type="text"
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <button onClick={deleteCourse}>Delete</button>
    </div>
  );
}

export default DeleteCoursePage;