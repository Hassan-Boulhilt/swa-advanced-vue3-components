import { createApp } from "vue";
import App from "./App.vue";
// import Greeting from '@/components/Greeting.vue'

let vm = createApp(App);
// Register a component globaly
// vm.component('Greeting', Greeting)

vm.mount("#app");
