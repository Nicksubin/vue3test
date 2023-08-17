import { createApp } from 'vue';
import App from './App.vue';

import '@/assets/common/css/main.css';
import '@/assets/common/css/tailwind.css';
import '@/assets/common/css/app.css';
import router from './router';

const app = createApp(App);
app. use (router)





app .mount('#app')
