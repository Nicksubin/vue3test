import {createRouter, createWebHistory} from "vue-router";


// Font

// Layout
import MainLayout from "@/components/layout/MainLayout.vue";
import MainView from "@/views/main/Main.vue";

const routes = [
    {
        name: 'MainLayout',
        component: MainLayout,
        redirect: '/main',
        children: [
            {
                path: '/main',
                name: 'Main',
                component: MainView,
            },
        ]

    },
];


const router = createRouter( {
    history: createWebHistory(),
    hash: false,
    routes,
});

export default router;