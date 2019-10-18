import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PatientBasicinfoComponent } from "./patient-basicinfo/patient-basicinfo.component";
import { PatientReportsComponent } from "./patient-reports/patient-reports.component";
import { PatientDocumentsComponent } from "./patient-documents/patient-documents.component";
import { SharedModule } from "../../shared/shared.module";
import { MenuService } from "src/app/theme/components/menu/menu.service";

export const routes = [
  { path: "", redirectTo: "patient-basicinfo", pathMatch: "full" },
  {
    path: "patient-basicinfo",
    component: PatientBasicinfoComponent,
    data: { breadcrumb: "Basic Info" }
  },
  {
    path: "patient-reports",
    component: PatientReportsComponent,
    data: { breadcrumb: "Reports" }
  },
  {
    path: "patient-documents",
    component: PatientDocumentsComponent,
    data: { breadcrumb: "Documents" }
  }
];

@NgModule({
  declarations: [
    PatientBasicinfoComponent,
    PatientReportsComponent,
    PatientDocumentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ],
  entryComponents: [
    PatientBasicinfoComponent,
    PatientReportsComponent,
    PatientDocumentsComponent
  ],
  providers: [SharedModule, MenuService]
})
export class PatientDashboardModuleModule {}
