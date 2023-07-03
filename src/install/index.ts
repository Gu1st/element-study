import Components from "@/components";
import type { App, Plugin } from "vue";

export const UniKey = Symbol("Harexs");

export const makerInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    if ((app as App & { UniKey: boolean }).UniKey) return true;
    (app as App & { UniKey: boolean }).UniKey = true;

    components.forEach((comp) => app.use(comp));
  };
  return {
    install,
  };
};

const DefaultInstall = makerInstaller([...Components]);

export const install = DefaultInstall.install;
export default DefaultInstall;
