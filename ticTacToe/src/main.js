import { createApp } from 'vue'
import Game from './components/Game.vue'
import NameInput from './components/NameInput.vue'
import App from './App.vue'
import './main.css'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', component: NameInput }, // 这里是设置了根路由对应NameInput.vue组件
    { path: '/game', name: 'Game', component: Game, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    console.log('Navigating to:', to.fullPath);
    next();
  });

createApp(App).use(router).mount('#app')
