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