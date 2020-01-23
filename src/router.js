import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import Services from './views/ServicesPage.vue'
import ProductsPage from './views/ProductsPage.vue'
import AboutPage from  './views/AboutPage.vue'
import ContactPage from './views/AboutPage.vue'
import JobsPage from './views/JobsPage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsPage
    },
  ]
})
