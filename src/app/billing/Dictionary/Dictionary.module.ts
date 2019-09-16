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
import { ScopeComponent } from './Scope/Scope.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DRIComponent } from './DRI/DRI.component';
import { MessagesComponent } from './Messages/Messages.component';
import { AddMessageComponent } from './Messages/addMessage/addMessage.component';
import { AddDRIComponent } from './DRI/addDRI/addDRI.component';
import { MessagesUploadComponent } from './Messages/messages-upload/messages-upload.component';
import { SeqResultsComponent } from './SeqResults/SeqResults.component';
import { PersonalComponent } from './Personal/Personal.component';
import { AlgorithmComponent } from './Algorithm/Algorithm.component';
import { UploadComponent } from './Algorithm/upload/upload.component';
import { AddAlgorithmComponent } from './Algorithm/addAlgorithm/addAlgorithm.component';
import { ScopeUploadCSVComponent } from './Scope/upload-csv/upload-csv.component';
import { UploadCSVComponent } from './SeqResults/uploadCSV/uploadCSV.component';
import { DriUploadCSVComponent } from './DRI/dri-upload-csv/dri-upload-csv.component';
import { HaplotypesComponent } from './haplotypes/haplotypes.component';
import { TestsComponent } from './tests/tests.component';

export const routes = [
  { path: '', redirectTo: 'Scope' },
  { path: 'Scope', component: ScopeComponent, data: { breadcrumb: 'Scope' } },
  { path: 'DRI', component: DRIComponent, data: { breadcrumb: 'D R I' } },
  { path: 'Messages', component: MessagesComponent, data: { breadcrumb: 'Messages' } },
  { path: 'SeqResults', component: SeqResultsComponent, data: { breadcrumb: 'SEQ Results' } },
  { path: 'Personal', component: PersonalComponent, data: { breadcrumb: 'Personal Data' } },
  { path: 'Algorithm', component: AlgorithmComponent, data: { breadcrumb: 'ALGO REF' } },
  { path: 'haplotypes', component: HaplotypesComponent, data: { breadcrumb: 'ALGO REF' } },
  { path: 'Tests', component: TestsComponent , data: { breadcrumb: 'ALGO REF' } },
];

@NgModule({
  declarations: [ ScopeComponent, ScopeUploadCSVComponent, DRIComponent, AddDRIComponent, MessagesComponent, AddMessageComponent, SeqResultsComponent, UploadCSVComponent, MessagesUploadComponent, PersonalComponent, AlgorithmComponent, UploadComponent, AddAlgorithmComponent, DriUploadCSVComponent, HaplotypesComponent, TestsComponent ],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule, NgxChartsModule, OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents: [AddMessageComponent, AddDRIComponent, MessagesUploadComponent,UploadCSVComponent, ScopeUploadCSVComponent, UploadComponent, AddAlgorithmComponent,PersonalComponent,DriUploadCSVComponent],
  providers: [AlertService]
})
export class DictionaryModule { }
