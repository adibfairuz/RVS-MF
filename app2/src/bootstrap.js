import App from './App.svelte';


const mount = (element) => {
    new App({
        target: element
    });
}

if (!window.host) {
    mount(document.body);
}

export { mount };