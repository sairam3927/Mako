import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TreeModule } from 'primeng/primeng';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../../../shared/shared.module';
import { PipesModule } from '../../../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ModalModule } from 'ngx-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CasesPrescreeningComponent } from './cases-prescreening/cases-prescreening.component';
import { CasesNotesComponent } from './cases-notes/cases-notes.component';
import { CasesClinicalObservationsComponent } from './cases-clinical-observations/cases-clinical-observations.component';
import { CasesClaimsComponent } from './cases-claims/cases-claims.component';
import { AddNoteComponent } from './cases-notes/add-note/add-note.component';


const route: Routes = [
  { path: '', redirectTo: 'prescreening', pathMatch: 'full' },
  { path: 'prescreening', component: CasesPrescreeningComponent, data: { breadcrumb: 'Scheduled' } },
  { path: 'notes', component: CasesNotesComponent, data: { breadcrumb: 'Confirmed' } },
  { path: 'clinicalObservations', component: CasesClinicalObservationsComponent, data: { breadcrumb: 'Confirmed' } },
  { path: 'Claims', component: CasesClaimsComponent, data: { breadcrumb: 'Confirmed' } },
]

@NgModule({
  declarations: [CasesPrescreeningComponent, CasesNotesComponent, CasesClinicalObservationsComponent, CasesClaimsComponent, AddNoteComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    NgxPaginationModule,
    SharedModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddNoteComponent]
})
export class CasesModule { }
