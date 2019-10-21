import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { RouterModule } from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from '@angular/material';
//import { AlertsTmComponent } from './taskmanager/alerts-tm/alerts-tm.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ManageOrdersComponent } from './dashboard/manage-orders/manage-orders.component';
import { VisitRecordsComponent } from './dashboard/visit-records/visit-records.component';
import { IncomingOrderQueueComponent } from './dashboard/incoming-order-queue/incoming-order-queue.component';
import { AddNewOrderComponent } from './dashboard/add-new-order/add-new-order.component';
import { ManagePatientOrdersComponent } from './dashboard/manage-patient-orders/manage-patient-orders.component';
import { ManagePatientListComponent } from './dashboard/manage-patient-list/manage-patient-list.component';
import { ManageSchedulesComponent } from './dashboard/manage-schedules/manage-schedules.component';
import { ConfirmAppointmentsComponent } from './dashboard/confirm-appointments/confirm-appointments.component';
import { AssignPhysiciansComponent } from './dashboard/assign-physicians/assign-physicians.component';
import { TextLogComponent } from './dashboard/text-log/text-log.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TreeModule } from 'primeng/primeng';
import { AppointmentsComponent } from './dashboard/appointments/appointments.component';
import { AddPatientDocumentsDashboardComponent } from './dashboard/visit-records/patient-dashboard/patient-docs/add-patient-documents-dashboard/add-patient-documents-dashboard.component';
import { ProfileAndInsuranceDialogComponent } from './dashboard/incoming-order-queue/profile-and-insurance-dialog/profile-and-insurance-dialog.component';
import { AddTextDialogComponent } from './dashboard/text-log/add-text-dialog/add-text-dialog.component';
import { ManageVisitsComponent } from './dashboard/manage-visits/manage-visits.component';
import { CasesComponent } from './dashboard/visit-records/patient-dashboard/cases/cases.component';
import { AddNoteComponent } from './dashboard/visit-records/patient-dashboard/patient-notes/add-note/add-note.component';
import { AddPatientVisitDashboardDialogComponent } from './dashboard/visit-records/patient-dashboard/patient-clinical-notes/add-patient-visit-dashboard-dialog/add-patient-visit-dashboard-dialog.component';
import { PatientBillClaimsComponent } from './dashboard/visit-records/patient-dashboard/patient-bill-claims/patient-bill-claims.component';
import { PatientNotesComponent } from './dashboard/visit-records/patient-dashboard/patient-notes/patient-notes.component';
import { AddInsurancePatientDashboardComponent } from './dashboard/visit-records/patient-dashboard/patient-insurance/add-insurance-patient-dashboard/add-insurance-patient-dashboard.component';
import { PatientProfileComponent } from './dashboard/visit-records/patient-dashboard/patient-profile/patient-profile.component';
import { PatientInsuranceComponent } from './dashboard/visit-records/patient-dashboard/patient-insurance/patient-insurance.component';
import { PatientTestsComponent } from './dashboard/visit-records/patient-dashboard/patient-tests/patient-tests.component';
import { PatientDocsComponent } from './dashboard/visit-records/patient-dashboard/patient-docs/patient-docs.component';
import { PatientPrescreeningComponent } from './dashboard/visit-records/patient-dashboard/patient-prescreening/patient-prescreening.component';
import { PatientClinicalNotesComponent } from './dashboard/visit-records/patient-dashboard/patient-clinical-notes/patient-clinical-notes.component';
import { PatientTestNotesComponent } from './dashboard/visit-records/patient-dashboard/patient-test-notes/patient-test-notes.component';
import { PatientActivityLogComponent } from './dashboard/visit-records/patient-dashboard/patient-activity-log/patient-activity-log.component';
import { PatientScheduledAppointmentsComponent } from './dashboard/visit-records/patient-dashboard/patient-scheduled-appointments/patient-scheduled-appointments.component';
import { AddNewPatientOrdersComponent } from './dashboard/manage-patient-orders/add-new-patient-orders/add-new-patient-orders.component';
import { AddNewAppointmentOrderComponent } from './dashboard/confirm-appointments/add-new-appointment-order/add-new-appointment-order.component';
import { AddAppointmentOrderComponent } from './dashboard/manage-schedules/add-appointment-order/add-appointment-order.component';
import { AddNewPatientOrderComponent } from './dashboard/manage-patient-list/add-new-patient-order/add-new-patient-order.component';
import { AssignPhysicianComponent } from './dashboard/assign-physicians/assign-physician/assign-physician.component';
import { InsuranceDialogComponent } from './dashboard/manage-patient-list/insurance-dialog/insurance-dialog.component';
import { AddInsuranceDialogComponent } from './dashboard/add-new-order/add-insurance-dialog/add-insurance-dialog.component';
import { AddIncomingMessageDialogComponent } from './dashboard/text-log/add-incoming-message-dialog/add-incoming-message-dialog.component';
import { AddMessageDialogComponent } from './dashboard/text-log/add-message-dialog/add-message-dialog.component';
import { AddNewOrderDialogComponent } from './dashboard/add-new-order/add-new-order-dialog/add-new-order-dialog.component';
import { AddIncomingOrderComponent } from './dashboard/incoming-order-queue/add-incoming-order/add-incoming-order.component';
import { SpeechRecognizerService } from './dashboard/visit-records/patient-dashboard/shared/services/speech-recognizer.service';
import { SpeechSynthesizerService } from './dashboard/visit-records/patient-dashboard/shared/services/speech-synthesizer.service';
import { AlertService } from '../shared/services/alert.service';
import { AddPatientDataComponent } from './dashboard/incoming-order-queue/addPatientData/addPatientData.component';
import { AddDocumentsComponent } from './dashboard/incoming-order-queue/add-documents/add-documents.component';
import { DeleteConfirmDailogComponent } from '../shared/delete-confirm-dailog/delete-confirm-dailog.component';

//import { ReportsComponent } from './reports/reports.component';
export const routes = [
  { path: '', redirectTo: 'incomingorders', pathMatch: 'full' },
  // { path: 'record', loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full', data: { breadcrumb: 'Analytics' } },
  // { path: 'manageorders', component: ManageOrdersComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Orders'} },
  // { path: 'scheduling', component: SchedulingComponent,pathMatch: 'full', data : { breadcrumb : 'Schedule'} },
  // { path: 'patientdashboard', component: VisitRecordsComponent,children :[
  //   {path: '', redirectTo: 'cases', pathMatch: 'full'},
    // {path: 'patientchart', component:PatientProfileComponent, data: { breadcrumb : 'Patient Profile'}},
    // {path: 'cases', component:PatientInsuranceComponent, data: { breadcrumb : 'Patient Insurance'}},
    // {path: 'test', component:PatientTestsComponent, data: { breadcrumb : 'Patient Tests'}},
    // {path: 'docx', component:PatientDocsComponent, data: { breadcrumb : 'Patient Docs'}},
    // {path: 'prescreening', component:PatientPrescreeningComponent, data: { breadcrumb : 'Patient Prescreening'}},
    // {path: 'case', component:PatientClinicalNotesComponent, data: { breadcrumb : 'Clinical Notes'}},
    // {path: 'testnotes', component:PatientTestNotesComponent, data: { breadcrumb : 'Test Notes'}},
    // {path: 'cases', component: CasesComponent,loadChildren: './dashboard/visit-records/patient-dashboard/cases/cases.module#CasesModule', data : { breadcrumb : 'Patient Dashboard'} },
    // {path: 'activitylog', component:PatientActivityLogComponent, data: { breadcrumb : 'Activity Log'}},
    // {path: 'dashboardnotes', component:PatientNotesComponent, data: { breadcrumb : 'Activity Log'}},
    // {path: 'dashboardclaims', component:PatientBillClaimsComponent, data: { breadcrumb : 'Activity Log'}},
    // {path: 'scheduledappointments', component:PatientScheduledAppointmentsComponent, data: { breadcrumb : 'Scheduled Appointments'}},
  // ], data : { breadcrumb : 'Patient Dashboard'} },
  { path: 'incomingorders', component: IncomingOrderQueueComponent,pathMatch: 'full', data : { breadcrumb : 'Orders'}  },
  // { path: 'addneworder', component: AddNewOrderComponent,pathMatch: 'full', data : { breadcrumb : 'Add New Order'} },
  // { path: 'managepatientorders', component: ManagePatientOrdersComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Patient Orders'} },
  // { path: 'managecases', component: ManagePatientListComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Cases'} },
  // { path: 'patientvisitrecords',loadChildren:"./dashboard/patientvisitrecords/patientvisitrecords.module#PatientvisitrecordsModule", data : { breadcrumb : 'Visit Records'} },
  // { path: 'managepatientrecords', component: ManagePatientOrdersComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Patients'} },
  // { path: 'manageschedules', component: ManageSchedulesComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Schedules'} },
  // { path: 'confirmappointments', component: ConfirmAppointmentsComponent,pathMatch: 'full', data : { breadcrumb : 'Confirm Appointments'} },
  // { path: 'assignphysicians', component: AssignPhysiciansComponent,pathMatch: 'full', data : { breadcrumb : 'Assign Physicians'} },
  // { path: 'textlog', component: TextLogComponent,loadChildren: './dashboard/text-log/text-log.module#TextLogModule', data : { breadcrumb : 'Text Log'} },
  // { path: 'appointments', component: AppointmentsComponent,loadChildren: './dashboard/appointments/appointments.module#AppointmentsModule', data : { breadcrumb : 'Appointments'} },
  // { path: 'managevisits', component: ManageVisitsComponent,loadChildren: './dashboard/manage-visits/manage-visits.module#ManageVisitsModule', data : { breadcrumb : 'Manage Visits'} },
  // { path: 'visitrecords/profile', component: PatientProfileComponent,pathMatch: 'full', data : { breadcrumb : 'Patient Profile'} },
  // { path: 'visitrecords/insurance', component: PatientInsuranceComponent,pathMatch: 'full', data : { breadcrumb : 'Patient Insurance'} },
  // { path: 'visitrecords/test', component: PatientTestsComponent,pathMatch: 'full', data : { breadcrumb : 'Patient Tests'} },
  // { path: 'visitrecords/docx', component: PatientDocsComponent,pathMatch: 'full', data : { breadcrumb : 'Patient Docs'} },
  // { path: 'visitrecords/prescreening', component: PatientPrescreeningComponent,pathMatch: 'full', data : { breadcrumb : 'Patient Prescreening'} },
  // { path: 'visitrecords/clinicalnotes', component: PatientClinicalNotesComponent,pathMatch: 'full', data : { breadcrumb : 'Clinical Notes'} },
  // { path: 'visitrecords/testnotes', component: PatientTestNotesComponent,pathMatch: 'full', data : { breadcrumb : 'Test Notes'} },
  // { path: 'visitrecords/activitylog', component: PatientActivityLogComponent,pathMatch: 'full', data : { breadcrumb : 'Activity Log'} },
  // { path: 'visitrecords/dashboardnotes', component: PatientActivityLogComponent,pathMatch: 'full', data : { breadcrumb : 'Activity Log'} },
  // { path: 'visitrecords/dashboardclaims', component: PatientActivityLogComponent,pathMatch: 'full', data : { breadcrumb : 'Activity Log'} },
  // { path: 'visitrecords/scheduledappointments', component: PatientScheduledAppointmentsComponent,pathMatch: 'full', data : { breadcrumb : 'Scheduled Appointments'} },
 // { path: 'reports', component: TaskmanagerComponent, data: { breadcrumb: 'Reports' } },
  //{ path: 'calender', component: ReportsComponent, data: { breadcrumb: 'Calendar' } },
];

@NgModule({
  imports: [
    CommonModule,FormsModule,SharedModule,ConfirmationPopoverModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule.forChild(routes),ReactiveFormsModule,TreeModule
  ],
  declarations: [//TaskmanagerComponent,AlertsTmComponent//, ReportsComponentManageOrdersComponent,
    AddNewPatientOrdersComponent,
    CasesComponent,
    AppointmentsComponent,
    AddNewOrderDialogComponent,
    ProfileAndInsuranceDialogComponent,
    VisitRecordsComponent,ManageOrdersComponent,IncomingOrderQueueComponent,AssignPhysicianComponent,
    AddNewOrderComponent,
    ManagePatientOrdersComponent,
    ManagePatientListComponent,
    ManageSchedulesComponent,
    AddNoteComponent,
    ConfirmAppointmentsComponent,
    AssignPhysiciansComponent,
    TextLogComponent,
    AddIncomingOrderComponent,
    AddTextDialogComponent,
    AddMessageDialogComponent,
    AddIncomingMessageDialogComponent,
    AddInsuranceDialogComponent,
    InsuranceDialogComponent,
    AddNewPatientOrderComponent,
    AddAppointmentOrderComponent,
    AddNewAppointmentOrderComponent,
    PatientProfileComponent,
    PatientInsuranceComponent,
    PatientTestsComponent,
    PatientDocsComponent,
    PatientPrescreeningComponent,
    PatientClinicalNotesComponent,
    PatientTestNotesComponent,
    PatientActivityLogComponent,
    PatientScheduledAppointmentsComponent,
    AddInsurancePatientDashboardComponent,
    AddPatientDocumentsDashboardComponent,
    PatientBillClaimsComponent,
    PatientNotesComponent,
    AddPatientVisitDashboardDialogComponent,
    ManageVisitsComponent,
    AddPatientDataComponent,
    AddDocumentsComponent
  ],
  providers:[
    SpeechRecognizerService,
    SpeechSynthesizerService,AlertService, {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        ...new MatDialogConfig(),
        hasBackdrop: false,
      } as MatDialogConfig,
    }
  ],
  entryComponents : [AddPatientDataComponent, AddIncomingOrderComponent,AddNoteComponent,AddPatientVisitDashboardDialogComponent,AddPatientDocumentsDashboardComponent,AppointmentsComponent,AddInsurancePatientDashboardComponent,ProfileAndInsuranceDialogComponent,AddNewPatientOrdersComponent,AddAppointmentOrderComponent,AddNewAppointmentOrderComponent,InsuranceDialogComponent,AddNewPatientOrderComponent,AssignPhysicianComponent,AddIncomingMessageDialogComponent,AddInsuranceDialogComponent,AddNewOrderDialogComponent,
    AddTextDialogComponent,AddMessageDialogComponent,AddDocumentsComponent]
})
export class AnalyticsModule { }


