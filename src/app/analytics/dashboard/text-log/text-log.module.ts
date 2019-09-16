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
import { TextLogComponent } from './text-log.component';
import { IncomingTextComponent } from './incoming-text/incoming-text.component';
import { OutgoingTextComponent } from './outgoing-text/outgoing-text.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


const route: Routes = [
  { path: '', redirectTo: 'outgoing', pathMatch: 'full' },
  { path: 'outgoing', component: OutgoingTextComponent, data: { breadcrumb: 'Outgoing Messages' } },
  { path: 'incoming', component: IncomingTextComponent, data: { breadcrumb: 'Incoming Messages' } }

]

@NgModule({
  declarations: [IncomingTextComponent, OutgoingTextComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,
    OwlDateTimeModule, OwlNativeDateTimeModule 
  ],
  providers:[SharedModule]
})
export class TextLogModule { }
