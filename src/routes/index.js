import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import Services from '@/views/Services.vue'
import About from '@/views/About.vue'
import Team from '@/views/Team.vue'
import Why from '@/views/Why.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/about', component: About },
    { path: '/team', component: Team },
    { path: '/why', component: Why },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;