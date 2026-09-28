import { ApplicationConfig } from "@angular/core";
import {provideServerRendering, withRoutes} from '@angular/ssr';
import { serverRoutes } from "./app.server.routes";

export const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))            
  ]
}