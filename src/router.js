import Home from "./share/presentation/views/home.vue";
import {createRouter, createWebHistory} from "vue-router";

const about = () => import("./share/presentation/views/about.vue")

const routes = [
    {path: "/home", name: "home", component: Home, meta: {title: "Home"}}, // Eagerly loaded
    {path: "/about", name: "about", component: about, meta: {title: "About"}}, // Lazy loaded
    {path: "/", redirect: "/home"} // Redirect root to /home
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router;