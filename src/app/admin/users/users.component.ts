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
    status = ["Active", "Incative"];
    stepsOptionSelected: any;
    onStepsOptionsSelected(event) {
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
        this.usersService.getUser().subscribe(
            data => {
              console.log(data)
              this.tableList = data['Users'];
            }
          );
    }


    public openUserDialog(id, action, item) {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
        });
        (<UserDialogComponent>dialogRef.componentInstance).id = id;
        (<UserDialogComponent>dialogRef.componentInstance).action = action;
        (<UserDialogComponent>dialogRef.componentInstance).item = item;
        dialogRef.afterClosed().subscribe(data => {
            this.getUser();
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


    deleteUser(userid) {
        let body = {
            "UserId": userid,
        }
        this.usersService.deleteuser(body).subscribe(
            data => {
                console.log('add/update response', data)
                this.getUser();
                if (data['Success'] == true) {
                    this.alertService.createAlert(data['Message'], 1);
                } else {
                    this.alertService.createAlert(data['Message'], 0);
                }
            }
        );

    }

    changeStatus(id, status) {
        let body = {
            "UserId": id,
            "Status": status
        }
        this.usersService.updateuserstatus(body).subscribe(
            data => {
                console.log('add/update response', data)
                this.getUser();
                if (data['Success'] == true) {
                    this.alertService.createAlert(data['Message'], 1);
                } else {
                    this.alertService.createAlert(data['Message'], 0);
                }
            }
        )

    }

}