import { mergeApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from "./app/app";
import { appConfig } from "./app/app.config";
import { serverConfig } from "./app/app.config.server";

const serverAppConfig = mergeApplicationConfig(appConfig, serverConfig, {
    providers: [provideZoneChangeDetection()],
})
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, serverAppConfig, context);

export default bootstrap;
