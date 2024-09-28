import { Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { SignalComponent } from './signal/signal.component';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'add-user',
        loadComponent: () => import('./admin/add-user/add-user.component').then(c => c.AddUserComponent),
        //component: AddUserComponent
    },
    {
        path: 'two-way',
        component: TwoWayComponent
    },
    {
        path: 'signals',
        component: SignalComponent
    }
];
