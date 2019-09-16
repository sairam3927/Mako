import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DragulaService } from 'ng2-dragula';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { IncomingOrdersComponent } from './incoming-orders/incoming-orders.component';
import { PatientStatusComponent } from './patient-status/patient-status.component';
import { LostSalesReportComponent } from './lost-sales-report/lost-sales-report.component';
import { BillingStatusComponent } from './billing-status/billing-status.component';
import { IncomingStatusComponent } from './incoming-status/incoming-status.component';
import { OutgoingReferralComponent } from './outgoing-referral/outgoing-referral.component';
import { ReportsComponent } from './reports.component';
import { AlertService } from '../shared/services/alert.service';
import { UploadRawDataComponent } from './incoming-orders/upload-raw-data/upload-raw-data.component';

export const routes = [
  { path: '', redirectTo: 'rawdata', pathMatch: 'full' },
  //{ path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
  { path: 'rawdata', component: IncomingOrdersComponent, data: { breadcrumb: 'Raw Data' } },
  // { path: 'patientstatus', component: PatientStatusComponent, data: { breadcrumb: 'Patient Status' } },
  // { path: 'lostsalesreport', component: LostSalesReportComponent, data: { breadcrumb: 'Lost Sales Report' } },
  // { path: 'billingstatus', component: BillingStatusComponent, data: { breadcrumb: 'Billing Status' } },
  // { path: 'incomingreferral', component: IncomingStatusComponent, data: { breadcrumb: 'Incoming Referral' } },
  // { path: 'outgoingreferral', component: OutgoingReferralComponent, data: { breadcrumb: 'Outgoing Referral' } },
 
];

@NgModule({
  declarations: [IncomingOrdersComponent, PatientStatusComponent, LostSalesReportComponent, BillingStatusComponent, IncomingStatusComponent, OutgoingReferralComponent, ReportsComponent, UploadRawDataComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule
  ],
  entryComponents: [UploadRawDataComponent],
  providers: [AlertService]
})
export class ReportsModule { }
