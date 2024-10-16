import React from 'react';
import { Course } from '../types/Course';

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <h2 className="course-title">{course.title}</h2>
          <p className="course-description">{course.description}</p>
          <a href={`/course/${course.id}`} className="course-link">View Course</a>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
