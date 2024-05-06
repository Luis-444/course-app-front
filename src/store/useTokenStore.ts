import { defineStore } from 'pinia';

export const useTokenStore = defineStore({
    id: 'token',
    state: () => ({
        token: localStorage.getItem('token') as string,
    }),
    actions: {
        setToken(newToken: string) {
            this.token = newToken;
            localStorage.setItem("token", newToken);
        },
        clearToken() {
            this.token = "";
        }
    }
});