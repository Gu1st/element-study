import Aside from "./src/aside.vue";
import Container from "./src/container.vue";
import Footer from "./src/footer.vue";
import Header from "./src/header.vue";
import Main from "./src/main.vue";
import { withInstall, withNoopInstall } from "@/hooks";

export const HarexsContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main,
});

export const HarexsHeader = withNoopInstall(Header);
export const HarexsFooter = withNoopInstall(Footer);
export const HarexsMain = withNoopInstall(Main);
export const HarexsAside = withNoopInstall(Aside);

export type ContainerInstance = InstanceType<typeof Container>;
export type AsideInstance = InstanceType<typeof Aside>;
export type FooterInstance = InstanceType<typeof Footer>;
export type HeaderInstance = InstanceType<typeof Header>;
export type MainInstance = InstanceType<typeof Main>;
