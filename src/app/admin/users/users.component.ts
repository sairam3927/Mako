import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UnitsassignedComponent } from './unitsassigned/unitsassigned.component';
import { AlertService } from '../../shared/services/alert.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UsersService, AlertService]
})
export class UsersComponent implements OnInit {

    
    tableList: any;

        public popoverTitle: string = 'Confirm Delete';
        public popoverMessage: string = 'Are you sure you want to delete this.?';
        public popoverStatusTitle: string = 'Confirm Status Change';
        public popoverStatusMessage: string = 'Are you sure you want to change status.?';
        public cancelClicked: boolean = false;

    filterToggle: boolean;
    toggleFilter() {
        this.filterToggle = !this.filterToggle;
      }
      public dateTime2: Date;
      public dateTime3: Date;
      status = ["Active","Incative"];
      stepsOptionSelected: any;
      onStepsOptionsSelected(event){
       console.log(event); 
      }

    public searchText: string;
    public page: any;
    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public usersService: UsersService, private alertService: AlertService) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getUser()
    }

    getUser() {
        this.tableList = null;
        this.usersService.getUser()
            .subscribe(
                data => {
                    this.tableList = data;
                }
            )
    }

    
    public openUserDialog(id) {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }

    public openUnitsAssignedDialog(id) {
        let dialogRef = this.dialog.open(UnitsassignedComponent, {
            data: id,
            height: 'auto',
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }


    deleteUser(userid){
        
        this.tableList = this.tableList.filter(e=>e.intApplicantId != userid)
        this.alertService.createAlert('Successfully deleted.', 1);
        console.log(this.tableList)
    }

    saveStatus() {
        //this.alertService.createAlert('Successfully saved.', 1);
    }

}