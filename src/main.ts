import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
const title =document.getElementsByTagName("title")[0];
title.text=import.meta.env.VITE_APP_TITLE;
console.log(import.meta.env)
console.log(title)



