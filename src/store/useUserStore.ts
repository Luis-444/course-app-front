import { defineStore } from 'pinia';
import { User, defaultUser } from '../types';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: defaultUser as User,
    }),
    actions: {
        setUser(newUser: User) {
            this.user = newUser;
        },
        clearUser() {
            this.user = defaultUser;
        }
    }
})