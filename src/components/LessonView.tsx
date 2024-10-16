import React from 'react';
import { useParams } from 'react-router-dom';
import { Course } from '../types/Course';

interface LessonViewProps {
    courses: Course[];
}

const LessonView: React.FC<LessonViewProps> = ({ courses }) => {
    const { courseId, moduleId, lessonId } = useParams<{ courseId: string; moduleId: string; lessonId: string }>();
    const course = courses.find(c => c.id === Number(courseId));

    if (!course) {
        return <div>Course not found.</div>;
    }

    const module = course.modules[Number(moduleId)];
    const lesson = module.lessons[Number(lessonId)];

    if (!lesson) {
        return <div>Lesson not found.</div>;
    }

    return (
        <div>
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
            <h3>Topics Covered</h3>
            <ul>
                {lesson.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
            <h3>Content</h3>
            {lesson.content.map((contentItem, index) => (
                <div key={index}>
                    {contentItem.type === 'text' && <p>{contentItem.data}</p>}
                    {contentItem.type === 'video' && (
                        <video controls width="600">
                            <source src={contentItem.data} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                    {contentItem.type === 'audio' && (
                        <audio controls>
                            <source src={contentItem.data} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>
                    )}
                    {contentItem.type === 'podcast' && (
                        <a href={contentItem.data} target="_blank" rel="noopener noreferrer">
                            Listen to Podcast
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LessonView;
