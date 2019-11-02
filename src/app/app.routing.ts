import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { OtpResetPasswordComponent } from './login/otp-reset-password/otp-reset-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientLoginComponent } from './patient/patient-login/patient-login.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { QcComponent } from './qc/qc.component';

export const routes: Routes = [
    {
        path: 'mako',
        component: LayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
            { path: 'qc', component: QcComponent, loadChildren: './qc/qc.module#QcModule', data: { breadcrumb: 'QC' } },
            { path: 'patients', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: '' } },
            { path: 'billing', component: BillingComponent, loadChildren: './billing/billing.module#BillingModule', data: { breadcrumb: 'Setup' } },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', data: { breadcrumb: '' } },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' } },
        ]

    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
    { path: 'patient-login', component: PatientLoginComponent, data: { breadcrumb: 'patient-login' } },
    { path: 'patient-dashboard', component: PatientDashboardComponent, loadChildren: './patient/patient-dashboard/patient-dashboard-module.module#PatientDashboardModuleModule', data: { breadcrumb: '' } },
    { path: 'register', component: RegisterComponent, data: { breadcrumb: 'Register' } },
    { path: 'forgotPassword', component: ForgotPasswordComponent, data: { breadcrumb: 'Forgot Password' } },
    { path: 'otp', component: OtpResetPasswordComponent, data: { breadcrumb: 'otp' } },
    { path: 'reset/:id', component: ResetPasswordComponent, data: { breadcrumb: 'Reset' } },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' } }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    //preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    useHash: true

});

