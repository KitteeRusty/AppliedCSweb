import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import store from "../store/store";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/appliedcs",
        name: "applied-cs",
        component: () => store.state.display.isMobile ? import('../components/mLayout.vue') : import('../components/layout.vue'),
        children: [
            {
                path: "",
                name: "landing",
                component: () => store.state.display.isMobile ? import('../components/landing/mLanding.vue') : import('../components/landing/landing.vue')
            },
            {
                path: "projects",
                name: "projects",
                component: () => store.state.display.isMobile ? import('../components/project/mProject.vue') : import('../components/project/project.vue')
            },
            {
                path: "contacts",
                name: "contacts",
                component: () => store.state.display.isMobile ? import('../components/contact/mContact.vue') : import('../components/contact/contact.vue')
            }
        ]
    },
    {
        path: "/",
        redirect: "/appliedcs" // 默认根路径重定向到 '/appliedcs'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;
