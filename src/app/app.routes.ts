import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'simple-injection',
        loadComponent: () => import('./features/simple-injection/simple-injection.component')
    },
    {
        path: 'using-inject-function-flags',
        loadComponent: () => import('./features/using-inject-function-flags/using-inject-function-flags.component')
    },
    {
        path: 'injection-into-a-factory-provider',
        loadComponent: () => import('./features/injection-into-a-factory-provider/injection-into-a-factory-provider.component')
    }
];
