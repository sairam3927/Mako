import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { ImagingPartnersComponent } from './imaging-partners/imaging-partners.component';
import { BusinessCentersComponent } from './business-centers/business-centers.component';
import { ClinicalCategoriesComponent } from './clinical-categories/clinical-categories.component';
import { VisitStatusComponent } from './visit-status/visit-status.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { AddPharmacyComponent } from './pharmacies/add-pharmacy/add-pharmacy.component';
import { AddIPartnerComponent } from './imaging-partners/add-i-partner/add-i-partner.component';
import { AddBusinessCenterComponent } from './business-centers/add-business-center/add-business-center.component';
import { AddClaimStatusComponent } from './claim-status/add-claim-status/add-claim-status.component';
import { AddClinicalCategoryComponent } from './clinical-categories/add-clinical-category/add-clinical-category.component';
import { AddQuestionnaireComponent } from './questionnaire/add-questionnaire/add-questionnaire.component';
import { AddVisitStatusComponent } from './visit-status/add-visit-status/add-visit-status.component';

const route: Routes = [
  { path: '', redirectTo: 'pharmacies', pathMatch: 'full' },
  { path: 'pharmacies', component: PharmaciesComponent, data: { breadcrumb: '' } },
  { path: 'imaging', component: ImagingPartnersComponent, data: { breadcrumb: 'Imaging Partners' } },
  { path: 'businesscenters', component: BusinessCentersComponent, data: { breadcrumb: 'Imaging Partners' } },
  { path: 'clinicalcategories', component: ClinicalCategoriesComponent, data: { breadcrumb: 'Imaging Partners' } },
  { path: 'visitstatus', component: VisitStatusComponent, data: { breadcrumb: 'Imaging Partners' } },
  { path: 'questionnaire', component: QuestionnaireComponent, data: { breadcrumb: 'Imaging Partners' } },
  { path: 'claimstatus', component: ClaimStatusComponent, data: { breadcrumb: 'Imaging Partners' } },

]

@NgModule({
  declarations: [PharmaciesComponent, ImagingPartnersComponent, BusinessCentersComponent, ClinicalCategoriesComponent, VisitStatusComponent, QuestionnaireComponent, ClaimStatusComponent, AddPharmacyComponent, AddIPartnerComponent, AddBusinessCenterComponent, AddClaimStatusComponent, AddClinicalCategoryComponent, AddQuestionnaireComponent, AddVisitStatusComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  providers:[SharedModule],
  entryComponents:[AddPharmacyComponent,AddIPartnerComponent,AddBusinessCenterComponent,AddClaimStatusComponent,AddClinicalCategoryComponent,AddQuestionnaireComponent,AddVisitStatusComponent]
})
export class MasterDataModule { }
