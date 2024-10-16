import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Course } from '../types/Course';
import '../styles.css'; // Ensure the styles are imported

interface CourseDetailProps {
    courses: Course[];
}

const CourseDetail: React.FC<CourseDetailProps> = ({ courses }) => {
    const { id } = useParams<{ id: string }>();
    const course = courses.find(course => course.id === Number(id));

    if (!course) {
        return <div>Course not found.</div>;
    }

    return (
        <div className="course-detail">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            
            <h3>Modules</h3>
            {course.modules.map((module, index) => (
                <div key={index} className="module">
                    <h4>{module.title}</h4>
                    <ul>
                        {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex}>
                                <Link to={`/course/${course.id}/module/${index}/lesson/${lessonIndex}`} className="lesson-button">
                                    {lesson.title}
                                </Link>
                                <p>{lesson.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CourseDetail;
