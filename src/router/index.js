import Vue from 'vue'
import VueRouter from 'vue-router'
import SFinal from '../components/SFinal.vue'
import SfirstStep from '../components/SfirstStep.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: '/', component: SfirstStep },
        { path: '/sfinal', component: SFinal }
    ]
})