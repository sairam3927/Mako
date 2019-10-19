import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { UsersComponent } from './users.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { Data } from '../../fake backend/data.backend.data';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PermissionsComponent } from './permissions/permissions.component';
import { UnitsassignedComponent } from './unitsassigned/unitsassigned.component'
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
// import { SharedModule } from 'primeng/primeng';

export const routes = [
  { path: '', component: UsersComponent, pathMatch: 'full', data: { breadcrumb: 'Users' }},
  { path: 'permissions/:id', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,InMemoryWebApiModule.forFeature(Data, { delay: 500 }),ConfirmationPopoverModule
  ],
  declarations: [
    UsersComponent,
    UserDialogComponent,
    PermissionsComponent,
    UnitsassignedComponent,
    
  ],
  entryComponents:[
    UserDialogComponent,UnitsassignedComponent
  ]
})
export class UsersModule { }
