import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: 'mako',
        component: LayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', loadChildren: './analytics/dashboard/dashboard.module#DashboardModule',pathMatch:"full", data: { breadcrumb: 'Dashboard' }},
            { path: 'patients', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: '' }},
            { path: 'billing', loadChildren: './billing/billing.module#BillingModule', data: { breadcrumb: 'SetUp' }},
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', data: { breadcrumb: '' }},
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' }},
            // { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule', data: { breadcrumb: 'Calendar'}}
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
    { path: 'register', component: RegisterComponent, data: { breadcrumb: 'Register' } },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' }  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});
