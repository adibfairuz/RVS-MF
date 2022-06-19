import { createApp, ref } from 'vue';
import App from './App.vue';

const mount = (element) => {
    const app = createApp(App)
    app.mount(element)
}

if (!window.host) {
    mount(document.getElementById("app"));
}

export { mount };