import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import HarexsPlus from "./install";
import "@/theme/index.scss";

const app = createApp(App);
app.use(HarexsPlus);
app.mount("#app");
