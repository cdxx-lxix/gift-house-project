import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import FilmView from "../views/FilmView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      // Template for a detailed view of the film.
      path: "/:id",
      name: "film",
      component: FilmView,
      props: true,
    },
  ],
});

export default router;
