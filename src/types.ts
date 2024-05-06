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