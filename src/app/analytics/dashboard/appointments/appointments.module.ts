import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ScheduleAppointmentComponent } from './scheduled/schedule-appointment/schedule-appointment.component';

const route: Routes = [
  { path: '', redirectTo: 'scheduled', pathMatch: 'full' },
  { path: 'scheduled', component: ScheduledComponent, data: { breadcrumb: 'Scheduled' } },
  { path: 'confirmed', component: ConfirmedComponent, data: { breadcrumb: 'Confirmed' } }

]

@NgModule({
  declarations: [ScheduledComponent, ConfirmedComponent, ScheduleAppointmentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[ScheduleAppointmentComponent]
})
export class AppointmentsModule { }
