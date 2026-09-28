import { ApplicationConfig } from "@angular/core";
import {provideServerRendering, withRoutes} from '@angular/ssr';
import { serverRoutes } from "./app.server.routes";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))            
  ]
}