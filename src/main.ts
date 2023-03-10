import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
const app=createApp(App);
//注册路由
app.use(router)

app.mount('#app')


//const title =document.getElementsByTagName("title")[0];
//title.text=import.meta.env.VITE_APP_TITLE;
//console.log(import.meta.env)
//console.log(title)
//const h1= document.createElement("h1");
//h1.innerHTML=import.meta.env.APP_NAME;
//document.body.appendChild(h1);


