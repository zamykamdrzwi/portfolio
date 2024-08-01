import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css';
import AOS from 'aos';

import FloorLayout from "@/components/layouts/FloorLayout.vue";
import LettersAnimation from "@/components/layouts/LettersAnimation.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('FloorLayout', FloorLayout);
app.component('LettersAnimation', LettersAnimation);

app.mount('#app')

AOS.init();