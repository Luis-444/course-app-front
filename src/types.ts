//User
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation?: string;
}
export const defaultUser: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
}

//Categories
export interface Category {
    id: number;
    name: string;
    code: number;
}
export const defaultCategory: Category = {
    id: 0,
    name: '',
    code: 0,
}

//Courses
export interface Course {
    id: number;
    title: string;
    description: string;
    instructor: string;
    duration: number;
    price: number;
    image: string;
    category: string;
    language: string;
    level: string;
}
export const defaultCourse: Course = {
    id: 0,
    title: '',
    description: '',
    instructor: '',
    duration: 0,
    price: 0,
    image: '',
    category: '',
    language: '',
    level: '',
}