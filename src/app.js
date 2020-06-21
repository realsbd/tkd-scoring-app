import Vue from 'vue';
import VueRouter from 'vue-router';
import score from './components/score';
import referee from './components/referee';

Vue.use(VueRouter)


const router = new VueRouter ({
    routes: [
        { path: '/', component: score},
        { path: '/referee', component: referee}
    ],
    mode: 'history'
})

new Vue({
    // components: {
    //     score,
    //     referee
    // },
    router,
}).$mount('#app');
