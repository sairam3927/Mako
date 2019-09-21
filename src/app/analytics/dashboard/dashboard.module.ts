import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { GoogleeMapsComponent } from './googlee-maps/googlee-maps.component';
import { AgmCoreModule } from '@agm/core';
import { PieComponent } from './pie/pie.component';
import { PieeComponent } from './piee/piee.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AuditeepieComponent } from './auditeepie/auditeepie.component';
import { RemarksturnaroundpieComponent } from './remarksturnaroundpie/remarksturnaroundpie.component';
import { TrendChartComponent } from './trend-chart/trend-chart.component';
import {NgxPaginationModule} from 'ngx-pagination';
// import { AddDocumentsComponent } from './incoming-order-queue/add-documents/add-documents.component';






export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full', data :{breadcrumb : 'Dashboard'} }
];

@NgModule({
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    AgmCoreModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    GoogleeMapsComponent,
    PieComponent,
    PieeComponent,
    AuditeepieComponent,
    RemarksturnaroundpieComponent,
    TrendChartComponent,
    
  ]
})
export class DashboardModule { }