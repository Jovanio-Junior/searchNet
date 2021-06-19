import Vue from 'vue'
import Router from 'vue-router'

import Contato from '../components/contato.vue'
import Home from '../components/home.vue'
import Resultados from '../components/resultados.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/resultados/:id',
            component: Resultados
        },
        {
            path: '/contato',
            component: Contato
        }
    ]
})