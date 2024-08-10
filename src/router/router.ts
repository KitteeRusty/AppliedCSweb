import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import store from "../store/store";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/website",
        name: "website-layout",
        component: () => store.state.display.isMobile ? import('../components/mLayout.vue') : import('../components/layout.vue'),
        children: [
            {
                path: "",
                name: "landing",
                component: () => store.state.display.isMobile ? import('../components/landing/mLanding.vue') : import('../components/landing/landing.vue')
            },
        ]
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
