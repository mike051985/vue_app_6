import { createRouter, createWebHistory } from 'vue-router'
import TheAboutPage from "../views/About.vue"
import TheHomePage from "../views/Home.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheHomePage
  },
  {
    path: '/about',
    name: 'About',
    component: TheAboutPage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
