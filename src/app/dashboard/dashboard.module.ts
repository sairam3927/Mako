import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { AlertService } from '../shared/services/alert.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'primeng/primeng';
import { AgmCoreModule } from '@agm/core';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule,
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    AgmCoreModule,
    NgxPaginationModule
  ],
  providers:[AlertService],
})


export class DashboardModule { }
