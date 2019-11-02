import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
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
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

export const routes = [
  { path: '', redirectTo: 'rawdata', pathMatch: 'full' },
  { path: 'rawdata', component: IncomingOrdersComponent, data: { breadcrumb: 'Raw Data' } }
];

@NgModule({
  declarations: [IncomingOrdersComponent, PatientStatusComponent, LostSalesReportComponent, BillingStatusComponent, IncomingStatusComponent, OutgoingReferralComponent, ReportsComponent, UploadRawDataComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,OwlDateTimeModule, 
    OwlNativeDateTimeModule,
  ],
  entryComponents: [UploadRawDataComponent],
  providers: [AlertService]
})
export class ReportsModule { }
