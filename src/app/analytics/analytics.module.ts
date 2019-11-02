import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IncomingOrderQueueComponent } from './dashboard/incoming-order-queue/incoming-order-queue.component';
import { AddNewOrderComponent } from './dashboard/add-new-order/add-new-order.component';
import { ConfirmAppointmentsComponent } from './dashboard/confirm-appointments/confirm-appointments.component';
import { AssignPhysiciansComponent } from './dashboard/assign-physicians/assign-physicians.component';
import { TextLogComponent } from './dashboard/text-log/text-log.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DataTableModule } from 'primeng/primeng';
import { AppointmentsComponent } from './dashboard/appointments/appointments.component';
import { ProfileAndInsuranceDialogComponent } from './dashboard/incoming-order-queue/profile-and-insurance-dialog/profile-and-insurance-dialog.component';
import { AddTextDialogComponent } from './dashboard/text-log/add-text-dialog/add-text-dialog.component';
import { AddNewAppointmentOrderComponent } from './dashboard/confirm-appointments/add-new-appointment-order/add-new-appointment-order.component';
import { AssignPhysicianComponent } from './dashboard/assign-physicians/assign-physician/assign-physician.component';
import { AddInsuranceDialogComponent } from './dashboard/add-new-order/add-insurance-dialog/add-insurance-dialog.component';
import { AddIncomingMessageDialogComponent } from './dashboard/text-log/add-incoming-message-dialog/add-incoming-message-dialog.component';
import { AddMessageDialogComponent } from './dashboard/text-log/add-message-dialog/add-message-dialog.component';
import { AddNewOrderDialogComponent } from './dashboard/add-new-order/add-new-order-dialog/add-new-order-dialog.component';
import { AddIncomingOrderComponent } from './dashboard/incoming-order-queue/add-incoming-order/add-incoming-order.component';
import { AlertService } from '../shared/services/alert.service';
import { AddPatientDataComponent } from './dashboard/incoming-order-queue/addPatientData/addPatientData.component';
import { AddDocumentsComponent } from './dashboard/incoming-order-queue/add-documents/add-documents.component';
import { ModalModule } from 'ngx-bootstrap';
import { TableModule } from 'primeng/table';

export const routes = [
  { path: '', redirectTo: 'incomingorders', pathMatch: 'full' },
  { path: 'incomingorders', component: IncomingOrderQueueComponent,pathMatch: 'full', data : { breadcrumb : 'Orders'}  },
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,OwlDateTimeModule, 
    OwlNativeDateTimeModule,
  ],
  declarations: [
    AppointmentsComponent,
    AddNewOrderDialogComponent,
    ProfileAndInsuranceDialogComponent,
    IncomingOrderQueueComponent,AssignPhysicianComponent,
    AddNewOrderComponent,
    ConfirmAppointmentsComponent,
    AssignPhysiciansComponent,
    TextLogComponent,
    AddIncomingOrderComponent,
    AddTextDialogComponent,
    AddMessageDialogComponent,
    AddIncomingMessageDialogComponent,
    AddInsuranceDialogComponent,
    AddNewAppointmentOrderComponent,
    AddPatientDataComponent,
    AddDocumentsComponent
  ],
  providers:[
      AlertService
  ],
  entryComponents : [AddPatientDataComponent, AddIncomingOrderComponent,AppointmentsComponent,ProfileAndInsuranceDialogComponent,AddNewAppointmentOrderComponent,AssignPhysicianComponent,AddIncomingMessageDialogComponent,AddInsuranceDialogComponent,AddNewOrderDialogComponent,
    AddTextDialogComponent,AddMessageDialogComponent,AddDocumentsComponent],
})
export class AnalyticsModule { }


