import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { PieComponent } from './pie/pie.component';
import { PieeComponent } from './piee/piee.component';
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
// import { AddDocumentsComponent } from './incoming-order-queue/add-documents/add-documents.component';

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
    DashboardComponent,
    PieComponent,
    PieeComponent,
    AlleleCallsComponent,
    GenotypeComponent,
    GenotypeTotalPieComponent,
    GenotypePieComponent,
    SingleAlleleCallPieComponent,
    TrendAnalysisComponent,
  ],
  providers:[AlertService],
  entryComponents:[SingleAlleleCallPieComponent,GenotypePieComponent]
})
export class DashboardModule { }