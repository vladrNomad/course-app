import React from "react";
import { useParams, Link } from "react-router-dom"; // Import useParams and Link
import { Course } from "../types/Course";

interface ModuleProps {
  courses: Course[];
}

const Module: React.FC<ModuleProps> = ({ courses }) => {
  const { courseId, moduleIndex } = useParams<{ courseId: string; moduleIndex: string }>(); // Get parameters from the URL
  const course = courses.find((c) => c.id === parseInt(courseId || ""));
  const module = course?.modules[parseInt(moduleIndex || "")];

  if (!module) {
    return <div>Module not found</div>;
  }

  return (
    <div>
      <h2>{module.title}</h2>
      <ul>
        {module.lessons.map((lesson, lessonIndex) => (
          <li key={lessonIndex}>
            {/* Link to the Lesson view */}
            <Link to={`/courses/${courseId}/modules/${moduleIndex}/lessons/${lessonIndex}`}>
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/courses/${courseId}`}>Back to Course</Link>
    </div>
  );
};

export default Module;
