import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './Dictionary/Dictionary.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import { AlgorithmComponent } from './Algorithm/Algorithm.component';
import { BillingComponent } from './billing.component';
import { CalculationsComponent } from './Calculations/Calculations.component';
import { ReportComponent } from './Report/Report.component';
import { SamplePatientDataComponent } from './SamplePatientData/SamplePatientData.component';
import { AlertService } from '../shared/services/alert.service';
import { StepsComponent } from './steps/steps.component';
import { AddStepsComponent } from './steps/add-steps/add-steps.component';
import { AddCalcComponent } from './Calculations/add-calc/add-calc.component';
// import { AddStepsComponent } from './Steps/add-steps/add-steps.component';

// import { AddAlgorithmComponent } from './Algorithm/addAlgorithm/addAlgorithm.component';
// import { UploadComponent } from './Algorithm/upload/upload.component';

export const routes = [
  { path: '', redirectTo: 'Dictionary', pathMatch: 'full' },
  { path: 'Dictionary', component: DictionaryComponent,loadChildren:'./Dictionary/Dictionary.module#DictionaryModule' , data: { breadcrumb: 'Dictionary'}},
  // { path: 'Algorithm', component: AlgorithmComponent, data: { breadcrumb: 'Algorithm' } },
  { path: 'Calculations', component: CalculationsComponent, data: { breadcrumb: 'Calculations' } },
  { path: 'Report', component: ReportComponent, data: { breadcrumb: 'Report' } },
  { path: 'Steps', component: StepsComponent,pathMatch: 'full' , data: { breadcrumb: 'Steps' } },
  // { path: 'SamplePatientData', component: SamplePatientDataComponent,loadChildren:'./SamplePatientData/SamplePatientData.module#SamplePatientDataModule' , data: { breadcrumb: 'Sample Data' } },
];

@NgModule({
  declarations: [ DictionaryComponent, BillingComponent, CalculationsComponent, ReportComponent, SamplePatientDataComponent, StepsComponent, AddStepsComponent, AddCalcComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    NgxChartsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents: [AddStepsComponent,AddCalcComponent],
  providers: [AlertService]
})
export class BillingModule { }
