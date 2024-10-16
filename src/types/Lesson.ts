import { Content } from './Content';

export interface Lesson {
    title: string;
    description: string;
    topics: string[];
    content: Content[];
}