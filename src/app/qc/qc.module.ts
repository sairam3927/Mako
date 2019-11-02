import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AgmCoreModule } from '@agm/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import { GenotypeComponent } from './genotype/genotype.component';
import { AlleleCallsComponent } from './allele-calls/allele-calls.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { GenotypeTotalPieComponent } from './genotype/genotype-total-pie/genotype-total-pie.component';
import { GenotypePieComponent } from './genotype/genotype-pie/genotype-pie.component';
import { SingleAlleleCallPieComponent } from './allele-calls/single-allele-call-pie/single-allele-call-pie.component';
import { TrendAnalysisComponent } from './trend-analysis/trend-analysis.component';

import { AnalyticsComponent } from './analytics/analytics.component';
import { GoogleeMapsComponent } from './googlee-maps/googlee-maps.component';

import { AuditeepieComponent } from './auditeepie/auditeepie.component';
import { RemarksturnaroundpieComponent } from './remarksturnaroundpie/remarksturnaroundpie.component';
import { TrendChartComponent } from './trend-chart/trend-chart.component';
import { SharedModule } from '../shared/shared.module';
import { PieComponent } from './allele-calls/pie/pie.component';
import { PieeComponent } from './piee/piee.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';


export const routes = [
  //{ path: '', component: DashboardComponent, pathMatch: 'full', data :{breadcrumb : 'Dashboard'} },
  { path: '', redirectTo: 'allelecalls', pathMatch: 'full' },
  { path: 'allelecalls', component: AlleleCallsComponent, data: { breadcrumb: 'Allele Calls' } },
  { path: 'genotypes', component: GenotypeComponent, data: { breadcrumb: 'Genotypes' } },
  { path: 'trendanalysis', component: TrendAnalysisComponent, data: { breadcrumb: 'Trend Analysis' } },
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
    
    AnalyticsComponent,
    GoogleeMapsComponent,
    PieComponent,
    PieeComponent,
    AuditeepieComponent,
    RemarksturnaroundpieComponent,
    TrendChartComponent,
    AlleleCallsComponent,
    GenotypeComponent,
    GenotypeTotalPieComponent,
    GenotypePieComponent,
    SingleAlleleCallPieComponent,
    TrendAnalysisComponent,
  ],
  providers:[AlertService],
  entryComponents:[SingleAlleleCallPieComponent,GenotypePieComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class QcModule { }
