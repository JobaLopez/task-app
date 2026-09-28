import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
    {
        path: '',
        renderMode: RenderMode.Client
    },
    {
        path: 'tarea/:id',
        renderMode: RenderMode.Client,

    }
];