import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddScopeComponent } from './add-scope/add-scope.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DictionaryService } from '../dictionary.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { RestrictionComponent } from 'src/app/shared/restriction/restriction.component';

@Component({
  selector: 'app-Scope',
  templateUrl: './Scope.component.html',
  styleUrls: ['./Scope.component.scss']
})
export class ScopeComponent implements OnInit {

  CreatePermission: any;
  ReadPermission: any;
  UpdatePermission: any;
  DeletePermission: any;

  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  fakedata: any;
  ScopeList: any;
  pageScopeList: any;

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
  filterForm: FormGroup;


  constructor(private _fb: FormBuilder, public dialog: MatDialog, private alertService: AlertService,
    private dictionaryService: DictionaryService) {
    this.filterForm = this._fb.group({
      'keyWord': [null]
    });
  }
  ngOnInit() {

    let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
    // console.log('Permissions: ', getPermissions);

    if (getPermissions) {
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Scope') {
          this.CreatePermission = getPermissions[i]['Create']
          this.ReadPermission = getPermissions[i]['Read']
          this.UpdatePermission = getPermissions[i]['Update']
          this.DeletePermission = getPermissions[i]['Delete']
        }
      }
    }
    // console.log(this.CreatePermission, 'CreatePermission');
    // console.log(this.ReadPermission, 'ReadPermission');
    // console.log(this.UpdatePermission, 'UpdatePermission');
    // console.log(this.DeletePermission, 'DeletePermission');

    this.getScopeList();
  }

  getScopeList() {
    this.filterForm.reset();
    this.dictionaryService.getscopelist().subscribe(
      data => {
        console.log(data)
        this.ScopeList = data['data'];
        if (this.ScopeList != null && this.ScopeList.length >= 0) {
          this.pageScopeList = this.ScopeList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.ScopeList != null ? this.ScopeList.length : 0;
      }
    );
  }

  public addScopeDialog(id, action, item) {
    if (this.UpdatePermission == true) {
      let dialogRef = this.dialog.open(AddScopeComponent, {
        height: 'auto',
        width: '400px',
        autoFocus: false,
      });
      (<AddScopeComponent>dialogRef.componentInstance).id = id;
      (<AddScopeComponent>dialogRef.componentInstance).action = action;
      (<AddScopeComponent>dialogRef.componentInstance).item = item;
      dialogRef.afterClosed().subscribe(data => {
        this.getScopeList();
      });
    } else {
      this.restrictionDialog('Update');
    }

  }

  deleteScope(data) {
    let body = {
      'ScopeId': data
    }
    if (this.DeletePermission == true) {
      this.dictionaryService.deletescope(body).subscribe(
        data => {
          console.log(data)
          if (data['Status'] == true) {
            this.getScopeList();
            this.alertService.createAlert('Successfully Deleted', 1);
          } else {
            this.alertService.createAlert('Something Went Wrong', 0);
          }

        }
      );
    } else {
      this.restrictionDialog('Delete');
    }

  }

  public ConfirmDialog(id, data) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: 'auto',
      width: '400px',
      autoFocus: false,
    });
    (<ConfirmDialogComponent>dialogRef.componentInstance).check = data;
    dialogRef.afterClosed().subscribe(data => {
      console.log("datr", data)
      if (data != undefined) {
        this.checkActive(id, data);
      } else {
        this.getScopeList();
      }
    });
  }
  checkActive(data, active) {
    let body = {
      'ScopeId': data,
      'Active': active
    }
    console.log(body)
    this.dictionaryService.checkactivescope(body).subscribe(
      data => {
        console.log(data)
        if (data['Status'] == true) {
          this.getScopeList();
          this.alertService.createAlert('Status Updated Successfully', 1);
        } else {
          this.alertService.createAlert('Something Went Wrong', 0);
        }

      }
    );
  }

  filterBy(formValues) {
    console.log(formValues, 'filter values')
    console.log(formValues.keyWord, 'formValues.keyWord')

    let events = this.ScopeList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.ScopeList = filteredEvents;
      this.pageScopeList = this.ScopeList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getScopeList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageScopeList = this.ScopeList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageScopeList = this.ScopeList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
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
        this.deleteScope(id)
      }
    });
  }

  public restrictionDialog(action) {
    let dialogRef = this.dialog.open(RestrictionComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    (<RestrictionComponent>dialogRef.componentInstance).action = action;
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}