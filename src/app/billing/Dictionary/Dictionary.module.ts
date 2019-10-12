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

import { AlgorithmComponent } from './Algorithm/Algorithm.component';
import { UploadComponent } from './Algorithm/upload/upload.component';
import { AddAlgorithmComponent } from './Algorithm/addAlgorithm/addAlgorithm.component';
import { ScopeUploadCSVComponent } from './Scope/upload-csv/upload-csv.component';
// import { UploadCSVComponent } from './SeqResults/uploadCSV/uploadCSV.component';
import { DriUploadCSVComponent } from './DRI/dri-upload-csv/dri-upload-csv.component';
import { HaplotypesComponent } from './haplotypes/haplotypes.component';
import { TestsComponent } from './tests/tests.component';
import { AddSeqResultComponent } from './SeqResults/add-seq-result/add-seq-result.component';
import { AddHaplotypeComponent } from './haplotypes/add-haplotype/add-haplotype.component';
import { AddTestComponent } from './tests/add-test/add-test.component';
import { UploadTestComponent } from './tests/upload-test/upload-test.component';
import { UploadCsvHaplotypeComponent } from './haplotypes/upload-csv-haplotype/upload-csv-haplotype.component';
import { AddScopeComponent } from './Scope/add-scope/add-scope.component';
import { NutrientComponent } from './nutrient/nutrient.component';
import { SectionsComponent } from './sections/sections.component';
import { AddSectionComponent } from './sections/add-section/add-section.component';
import { ConfirmDialogComponent } from './Scope/confirm-dialog/confirm-dialog.component';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';

export const routes = [
  { path: '', redirectTo: 'Scope' },
  { path: 'Scope', component: ScopeComponent, data: { breadcrumb: 'Scope' } },
  { path: 'DRI', component: DRIComponent, data: { breadcrumb: 'D R I' } },
  { path: 'Messages', component: MessagesComponent, data: { breadcrumb: 'Messages' } },
  { path: 'Sections', component: SectionsComponent, data: { breadcrumb: 'Sections' } },
  { path: 'Nutrient', component: NutrientComponent, data: { breadcrumb: 'Nutrient' } },
  { path: 'SeqResults', component: SeqResultsComponent, data: { breadcrumb: 'SEQ Results' } },
  { path: 'Algorithm', component: AlgorithmComponent, data: { breadcrumb: 'ALGO REF' } },
  { path: 'haplotypes', component: HaplotypesComponent, data: { breadcrumb: 'Haplotypes' } },
  { path: 'Tests', component: TestsComponent, data: { breadcrumb: 'Tests' } },

];

@NgModule({
  declarations: [ScopeComponent, ScopeUploadCSVComponent, DRIComponent, AddDRIComponent, MessagesComponent,
     AddMessageComponent, SeqResultsComponent, MessagesUploadComponent, AlgorithmComponent, UploadComponent, 
     AddAlgorithmComponent, DriUploadCSVComponent, HaplotypesComponent, TestsComponent, AddHaplotypeComponent, 
     AddTestComponent, AddSeqResultComponent, UploadTestComponent, UploadCsvHaplotypeComponent, AddScopeComponent,
      NutrientComponent,SectionsComponent, AddSectionComponent, ConfirmDialogComponent,DeleteConfirmDailogComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule, NgxChartsModule, OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents: [
    AddMessageComponent,
    AddDRIComponent,
    // MessagesUploadComponent,
    // UploadCSVComponent,
    // ScopeUploadCSVComponent,
    // UploadComponent,
    // AddAlgorithmComponent,
    // DriUploadCSVComponent,
    // AddHaplotypeComponent,
    // AddTestComponent,
    // UploadTestComponent,
    // UploadCsvHaplotypeComponent,
    AddSeqResultComponent,
    AddScopeComponent,
    AddSectionComponent,
    ConfirmDialogComponent,
    DeleteConfirmDailogComponent
  ],
  providers: [AlertService]
})
export class DictionaryModule { }
