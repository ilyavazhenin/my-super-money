import { createRouter, createWebHistory } from 'vue-router';
import AddTransaction from '@/pages/AddTransactionPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Add Transaction',
            component: AddTransaction,
        },
        {
            path: '/overview',
            name: 'Overview',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/OverviewStatsPage.vue'),
        },
        {
            path: '/settings',
            name: 'Settings',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/GlobalSettingsPage.vue'),
        },
    ],
});

export default router;
