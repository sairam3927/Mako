import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UnitsassignedComponent } from './unitsassigned/unitsassigned.component';
import { AlertService } from '../../shared/services/alert.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UsersService, AlertService]
})
export class UsersComponent implements OnInit {


    TableList: any;
    pageTableList: any;
    public pageSize = 10;
    public pageSizeTemp = this.pageSize;
    public currentPage = 0;
    public totalSize = 0;
    public currentPageTemp = 0;
    public totalSizeTemp = 0;

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
    filterForm: FormGroup;

    constructor(public appSettings: AppSettings,
        public dialog: MatDialog, private _fb: FormBuilder,
        public usersService: UsersService, private alertService: AlertService) {
        this.filterForm = this._fb.group({
            'username': [null],
            'status':[null]
        });
    }

    ngOnInit() {
        this.getUser()
    }

    getUser() {
        this.usersService.getUser().subscribe(
            data => {
                console.log(data)
                this.TableList = data['Users'];
                if (this.TableList != null && this.TableList.length >= 0) {
                    this.pageTableList = this.TableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
                }
                this.totalSize = this.TableList != null ? this.TableList.length : 0;
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
    public deleteDialog(id) {
        let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
            height: 'auto',
            width: '500px',
            autoFocus: false,
        });
        dialogRef.afterClosed().subscribe(data => {
            console.log("datr", data)
            if (data == true) {
                this.deleteUser(id)
            }
        });
    }

    filterBy(formValues) {
        console.log(formValues, 'filter values')
        console.log(formValues.keyWord, 'formValues.keyWord')

        let events = this.TableList;
        if (events != null) {
            let filteredEvents = events.filter(x =>
                (formValues.username == null || JSON.stringify(x).toLowerCase().includes(formValues.username.toLowerCase())) && 
                (formValues.status == null || JSON.stringify(x).toLowerCase().includes(formValues.status.toLowerCase()))
            );
            console.log(filteredEvents, 'filteredEventssadA')

            this.TableList = filteredEvents;
            this.pageTableList = this.TableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            this.totalSize = filteredEvents.length;
            this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
            this.currentPage = 0;
        }

    }

    resetFilter() {
        this.currentPage = 0;
        this.pageSize = 10;
        this.getUser();
        this.filterForm.reset();
    }

    public handlePage(e: any) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.pageTableList = this.TableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    }

    public handlePageTemp(e: any) {
        this.currentPageTemp = e.pageIndex;
        console.log('pageSize', e.pageSize)
        this.pageSize = e.pageSize;
        this.pageTableList = this.TableList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
    }

}