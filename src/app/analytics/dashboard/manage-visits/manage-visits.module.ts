import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnscheduledComponent } from './unscheduled/unscheduled.component';
import { ScheduledVisitComponent } from './scheduled-visit/scheduled-visit.component';
import { PrescreeningComponent } from './prescreening/prescreening.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { BillingComponent } from './billing/billing.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ModalModule } from 'ngx-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AddUnscheduledVisitComponent } from './unscheduled/add-unscheduled-visit/add-unscheduled-visit.component';
import { AddScheduledVisitComponent } from './scheduled-visit/add-scheduled-visit/add-scheduled-visit.component';
import { AddRemarksModalComponent } from './unscheduled/add-remarks-modal/add-remarks-modal.component';
import { ScheduleAVisitComponent } from './unscheduled/schedule-a-visit/schedule-a-visit.component';
import { PatientQuestionnaireComponent } from './prescreening/patient-questionnaire/patient-questionnaire.component';
import { PatientNotesInManageVisitsComponent } from './prescreening/patient-notes-in-manage-visits/patient-notes-in-manage-visits.component';
import { PatientDocsInManageVisitsComponent } from './prescreening/patient-docs-in-manage-visits/patient-docs-in-manage-visits.component';
import { AddClaimDialogInManageVisitsComponent } from './billing/add-claim-dialog-in-manage-visits/add-claim-dialog-in-manage-visits.component';

const route: Routes = [
  { path: '', redirectTo: 'unscheduled', pathMatch: 'full' },
  { path: 'unscheduled', component: UnscheduledComponent, data: { breadcrumb: 'Scheduled' } },
  { path: 'scheduled', component: ScheduledVisitComponent, data: { breadcrumb: 'Confirmed' } },
  { path: 'prescreening', component: PrescreeningComponent, data: { breadcrumb: 'Confirmed' } },
  { path: 'diagnosis', component: DiagnosisComponent, data: { breadcrumb: 'Confirmed' } },
  { path: 'billing', component: BillingComponent, data: { breadcrumb: 'Confirmed' } },
  { path: 'prescreening/patientquestionnaire', pathMatch: 'full' , component:PatientQuestionnaireComponent, data:{ breadcrumb: 'Confirmed'} },
  { path: 'diagnosis/patientquestionnaire', pathMatch: 'full' , component:PatientQuestionnaireComponent, data:{ breadcrumb: 'Confirmed'} },
  

]

@NgModule({
  declarations: [UnscheduledComponent, ScheduledVisitComponent, PrescreeningComponent, DiagnosisComponent, BillingComponent, AddUnscheduledVisitComponent, AddScheduledVisitComponent, AddRemarksModalComponent, ScheduleAVisitComponent, PatientQuestionnaireComponent, PatientNotesInManageVisitsComponent, PatientDocsInManageVisitsComponent, AddClaimDialogInManageVisitsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    PipesModule,ConfirmationPopoverModule
  ],
  providers:[SharedModule],
  entryComponents:[AddUnscheduledVisitComponent,AddScheduledVisitComponent,AddRemarksModalComponent,ScheduleAVisitComponent,PatientNotesInManageVisitsComponent,PatientDocsInManageVisitsComponent,AddClaimDialogInManageVisitsComponent]
})
export class ManageVisitsModule { }
