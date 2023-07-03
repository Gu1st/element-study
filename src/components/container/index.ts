import Aside from "./src/aside.vue";
import Container from "./src/container.vue";
import Footer from "./src/fiiter.vue";
import Header from "./src/header.vue";
import Main from "./src/main.vue";
import type { App } from "vue";

export const HarexsContainer = {
  install(app: App) {
    app.component(Container.name, Container);
  },
};

export type ContainerInstance = InstanceType<typeof Container>;
export type AsideInstance = InstanceType<typeof Aside>;
export type FooterInstance = InstanceType<typeof Footer>;
export type HeaderInstance = InstanceType<typeof Header>;
export type MainInstance = InstanceType<typeof Main>;
