import Home from "./share/presentation/views/home.vue";
import {createRouter, createWebHistory} from "vue-router";
import publishingRoutes from "./publishing/presentation/publishing-routes.js";

const about = () => import("./share/presentation/views/about.vue")
const pageNotFound = () => import("./share/presentation/views/page-not-found.vue")

const routes = [
    {path: "/home", name: "home", component: Home, meta: {title: "Home"}}, // Eagerly loaded
    {path: "/about", name: "about", component: about, meta: {title: "About"}}, // Lazy loaded
    {path: "/publishing", name: "publishing", children: publishingRoutes },
    {path: "/", redirect: "/home"}, // Redirect root to /home
    {path: "/:pathMatch(.*)*", name: "not-found", component: pageNotFound, meta: {title: "Page not found"}}, // Lazy loaded
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = "Acme Learning Center";
    document.title = `${baseTitle} - ${to.meta['title'] || ''}`;
    next();
})

export default router;