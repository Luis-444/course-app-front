import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '@pages/Dashboard.vue';
import Categories from '@pages/Categories.vue';
import Register from '@pages/Register.vue';
import Login from '@pages/Login.vue';
import NotFound from '@pages/NotFound.vue';
import { useTokenStore } from './store/useTokenStore';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/notfound',
        component: NotFound,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            isGuest: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            isGuest: true
        }
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, _from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!useTokenStore().token) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    }else if (to.matched.some(record => record.meta.isGuest)){
        if (useTokenStore().token) {
            next({
                path: '/dashboard',
            })
        } else {
            next()
        }
    }
     else {
        next() // make sure to always call next()!
    }
})

export default router;