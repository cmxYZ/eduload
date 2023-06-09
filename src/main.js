import { createApp } from "vue";
import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import Filtered from "./Filtered";
import Home from "./Home";
import Admin from "./Admin";

const router = createRouter({
        history: createWebHistory(),
        routes: [{
            path: '/filtered',
            component: Filtered,
        },
        {
            path: '/',
            component: Home,
        },
        {
            path: '/admin',
            component: Admin,
        }],
});

const app = createApp(App);
app.use(router);


app.mount("#app");

