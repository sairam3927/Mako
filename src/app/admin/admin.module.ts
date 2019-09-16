import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DragulaService } from 'ng2-dragula';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../shared/services/alert.service';
import { AttorneysComponent } from './attorneys/attorneys.component';
import { InternalPhysiciansComponent } from './internal-physicians/internal-physicians.component';
import { CptAndIcdComponent } from './cpt-and-icd/cpt-and-icd.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { ChiropractorsComponent } from './chiropractors/chiropractors.component';
import { ImagingPartnersComponent } from './imaging-partners/imaging-partners.component';
import { AvailabilityCalendarComponent } from './availability-calendar/availability-calendar.component';
import { TextTemplatesComponent } from './text-templates/text-templates.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { CalendarModule } from 'angular-calendar';
import { EventLogComponent } from './event-log/event-log.component';
import { AddAttorneyComponent } from './attorneys/add-attorney/add-attorney.component';
import { AddIPhysicianComponent } from './internal-physicians/add-i-physician/add-i-physician.component';
import { AddChiropractorComponent } from './chiropractors/add-chiropractor/add-chiropractor.component';
import { AddPharmacyComponent } from './pharmacies/add-pharmacy/add-pharmacy.component';
import { AddIPartnerComponent } from './imaging-partners/add-i-partner/add-i-partner.component';
import { ScheduleDialogComponent } from './availability-calendar/schedule-dialog/schedule-dialog.component';
import { AddEmailTemplateComponent } from './email-templates/add-email-template/add-email-template.component';
import { AddTextTemplateComponent } from './text-templates/add-text-template/add-text-template.component';
import { ManageCptCodesComponent } from './manage-cpt-codes/manage-cpt-codes.component';
import { ManageIcdCodesComponent } from './manage-icd-codes/manage-icd-codes.component';
import { AddCptCodeComponent } from './manage-cpt-codes/add-cpt-code/add-cpt-code.component';
import { AddIcdCodeComponent } from './manage-icd-codes/add-icd-code/add-icd-code.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorLogComponent } from './error-log/error-log.component';
import { LookupOptionsComponent } from './lookup-options/lookup-options.component';
import { AddLookupDialogComponent } from './lookup-options/add-lookup-dialog/add-lookup-dialog.component';

export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
  { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  { path: 'attorneys', component:AttorneysComponent, pathMatch: 'full', data: { breadcrumb: 'Attorneys'} },
  { path: 'iphysicians', component:InternalPhysiciansComponent, pathMatch: 'full', data: { breadcrumb: 'Internal Physicians'} },
  { path: 'cptcodes', component:ManageCptCodesComponent, pathMatch: 'full', data: { breadcrumb: 'CPT Codes'} },
  { path: 'icdcodes', component:ManageIcdCodesComponent, pathMatch: 'full', data: { breadcrumb: 'ICD Codes'} },
  { path: 'pharmacies', component:PharmaciesComponent, pathMatch: 'full', data: { breadcrumb: 'Pharmacies'} },
  { path: 'referringphysicians', component:ChiropractorsComponent, pathMatch: 'full', data: { breadcrumb: 'Referring Physicians'} },
  { path: 'imagingpartners', component:ImagingPartnersComponent, pathMatch: 'full', data: { breadcrumb: 'Imaging Partners'} },
  { path: 'availabilitycalendar', component:AvailabilityCalendarComponent, pathMatch: 'full', data: { breadcrumb: 'Availability Calendar'} },
  { path: 'texttemplates', component:TextTemplatesComponent, pathMatch: 'full', data: { breadcrumb: 'Text Template'} },
  { path: 'emailtemplates', component:EmailTemplatesComponent, pathMatch: 'full', data: { breadcrumb: 'Email Template'} },
  { path: 'eventlog', component:EventLogComponent, pathMatch: 'full', data: { breadcrumb: 'Event Log'} },
  { path: 'errorLog', component:ErrorLogComponent, pathMatch: 'full', data: { breadcrumb: 'Error Log'} },
  { path: 'settings', component:SettingsComponent, pathMatch: 'full', data: { breadcrumb: 'Settings'} },
  { path: 'lookups', component:LookupOptionsComponent, pathMatch: 'full', data: { breadcrumb: 'Lookup Options'} },
  
 
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,CalendarModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule],

  providers: [DragulaService, AlertService],

  declarations: [ 
    AttorneysComponent,
    InternalPhysiciansComponent,
    CptAndIcdComponent,
    PharmaciesComponent,
    ChiropractorsComponent,
    ImagingPartnersComponent,
    AvailabilityCalendarComponent,
    TextTemplatesComponent,
    EmailTemplatesComponent,
    EventLogComponent,
    AddAttorneyComponent,
    AddIPhysicianComponent,
    AddChiropractorComponent,
    AddPharmacyComponent,
    AddIPartnerComponent,
    ScheduleDialogComponent,
    AddEmailTemplateComponent,
    AddTextTemplateComponent,
    ManageCptCodesComponent,
    ManageIcdCodesComponent,
    AddCptCodeComponent,
    AddIcdCodeComponent,
    MasterDataComponent,
    SettingsComponent,
    ErrorLogComponent,
    LookupOptionsComponent,
    AddLookupDialogComponent],

  entryComponents: [
   ScheduleDialogComponent,
    AddEmailTemplateComponent,
    AddTextTemplateComponent,
   AddAttorneyComponent,AddChiropractorComponent,AddIPhysicianComponent,AddIPartnerComponent,AddPharmacyComponent,AddCptCodeComponent,
    AddIcdCodeComponent,AddLookupDialogComponent
  ]
})
export class AdminModule { }
