import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import ItemView from "../views/ItemView.vue";
import CartView from '../views/CartView.vue';

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
      // Template for a detailed view of the item.
      path: "/:id",
      name: "item",
      component: ItemView,
      props: true,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
  ],
});

export default router;
