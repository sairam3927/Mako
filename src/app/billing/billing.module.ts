import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
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
import { FinalOutputComponent } from './final-output/final-output.component';
import { PersonalComponent } from './Dictionary/Personal/Personal.component';


export const routes = [
  { path: '', redirectTo: 'Dictionary', pathMatch: 'full' },
  { path: 'Dictionary', component: DictionaryComponent,loadChildren:'./Dictionary/Dictionary.module#DictionaryModule' , data: { breadcrumb: 'Dictionary'}},
  { path: 'Calculations', component: CalculationsComponent, loadChildren:'./Calculations/Calculations.module#CalculationsModule' , data: { breadcrumb: 'Calculations' } },
  { path: 'finalOutput', component: FinalOutputComponent, data: { breadcrumb: 'Calculations' } },
  { path: 'Report', component: ReportComponent, data: { breadcrumb: 'Report' } },
  { path: 'Steps', component: StepsComponent,pathMatch: 'full' , data: { breadcrumb: 'Steps' } },
  { path: 'addSteps', component: AddStepsComponent,pathMatch: 'full' , data: { breadcrumb: 'Add Steps' } },
];

@NgModule({
  declarations: [ DictionaryComponent, BillingComponent, CalculationsComponent, ReportComponent, SamplePatientDataComponent, StepsComponent, AddStepsComponent, AddCalcComponent, FinalOutputComponent, PersonalComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    NgxChartsModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  entryComponents: [AddCalcComponent, PersonalComponent],
  providers: [AlertService]
})
export class BillingModule { }
