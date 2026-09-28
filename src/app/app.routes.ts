import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TaskDetail } from './pages/taskDetail/taskDetail';

export const appRoutes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'task/:id',
        component: TaskDetail,
    }
];