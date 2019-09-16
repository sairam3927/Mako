import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { VisitClinicalNotesComponent } from './visit-clinical-notes/visit-clinical-notes.component';
import { PatientClinicalNotesComponent } from './patient-clinical-notes/patient-clinical-notes.component';
import { PatientvisitrecordsComponent } from './patientvisitrecords.component';
import { AddNewPatientVisitComponent } from './add-new-patient-visit/add-new-patient-visit.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AnnNotesDialogComponent } from './ann-notes-dialog/ann-notes-dialog.component';
import { OpenDocxDialogComponent } from './open-docx-dialog/open-docx-dialog.component';

const route: Routes = [
  { path:"",component: PatientvisitrecordsComponent, pathMatch: 'full', data: { breadcrumb: 'Visit Records' }},
  { path: 'visitClinicalNotes', component: VisitClinicalNotesComponent , pathMatch: "full", data: { breadcrumb: 'Outgoing Messages' } },
  { path: 'questionnaire', component: QuestionnaireComponent , pathMatch:"full", data: { breadcrumb: 'Questionnaire' } },
  //{ path: 'incoming', component: IncomingTextComponent, data: { breadcrumb: 'Incoming Messages' } }

]

@NgModule({
  declarations: [VisitClinicalNotesComponent, PatientClinicalNotesComponent,PatientvisitrecordsComponent, AddNewPatientVisitComponent, QuestionnaireComponent, AnnNotesDialogComponent, OpenDocxDialogComponent],
  imports: [
    CommonModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddNewPatientVisitComponent,AnnNotesDialogComponent,OpenDocxDialogComponent]
})
export class PatientvisitrecordsModule { }
