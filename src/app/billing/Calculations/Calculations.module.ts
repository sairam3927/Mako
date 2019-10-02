import { NgModule } from '@angular/core';
import { SimulationComponent } from './simulation/simulation.component';
import { PregnancyLactaionComponent } from './pregnancy-lactaion/pregnancy-lactaion.component';
import { AdultNutritionComponent} from './adult-nutrition/adult-nutrition.component';
import { ReportVariablesComponent } from './report-variables/report-variables.component';
import { CommonModule} from '@angular/common';
import { ModalModule} from 'ngx-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableModule } from 'primeng/primeng';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TableModule } from 'primeng/table';

export const routes = [
  { path: '', redirectTo: 'PregnancyLactaion' },
  { path: 'Simulation', component: SimulationComponent, data: { breadcrumb: 'Simulation' } },
  { path: 'PregnancyLactaion', component: PregnancyLactaionComponent, data: { breadcrumb: 'Pregnancy Lactaion' } },
  { path: 'AdultNutrition', component: AdultNutritionComponent, data: { breadcrumb: 'Adult Nutrition' } },
  { path: 'ReportVariables', component: ReportVariablesComponent, data: { breadcrumb: 'Report Variables' } },
];

@NgModule({
  declarations: [SimulationComponent, PregnancyLactaionComponent, AdultNutritionComponent, ReportVariablesComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    NgxChartsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers: [SharedModule]
})
export class CalculationsModule { }
