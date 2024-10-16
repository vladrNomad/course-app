// src/App.tsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import LessonView from './components/LessonView';
import coursesData from './data/courses.json';
import { Course } from './types/Course';
import './styles.css';

const App: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const loadCourses = async () => {
            setCourses(coursesData as Course[]);
        };
        loadCourses();
    }, []);

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<CourseList courses={courses} />} />
                    <Route path="/course/:id" element={<CourseDetail courses={courses} />} />
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId" element={<LessonView courses={courses} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
