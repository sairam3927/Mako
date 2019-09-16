import { AlertService } from 'src/app/shared/services/alert.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
// import { SeqResultsComponent } from './SeqResults/SeqResults.component';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule, NgxChartsModule, OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents: [],
  providers: [AlertService]
})
export class SamplePatientDataModule { }
