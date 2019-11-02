import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog } from '@angular/material';
import { UploadRawDataComponent } from './upload-raw-data/upload-raw-data.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { RawDataService } from '../raw-data.service';
import { RestrictionComponent } from 'src/app/shared/restriction/restriction.component';

@Component({
  selector: 'app-incoming-orders',
  templateUrl: './incoming-orders.component.html',
  styleUrls: ['./incoming-orders.component.scss']
})
export class IncomingOrdersComponent implements OnInit {

  CreatePermission: any;
  ReadPermission: any;
  UpdatePermission: any;
  DeletePermission: any;

  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  fakedata: any;
  RawDataList: any;
  pageRawDataList: any;

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
    private rawDataService: RawDataService) {
    this.filterForm = this._fb.group({
      'keyWord': [null]
    });
  }

  onStepsOptionsSelected(event) {
    console.log(event);
  }

  public uploadCSVDialog() {
    if (this.CreatePermission == true) {
      let dialogRef = this.dialog.open(UploadRawDataComponent, {
        height: 'auto',
        width: '450px',
        autoFocus: false,

      });
      dialogRef.afterClosed().subscribe(data => {
        this.getRawDataList();
      });
    } else {
      this.restrictionDialog('Create');
    }

  }

  ngOnInit() {

    let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
    // console.log('Permissions: ', getPermissions);

    if (getPermissions) {
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Orders') {
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

    this.getRawDataList();
  }

  getRawDataList() {
    this.filterForm.reset();
    this.rawDataService.getrawdatalist().subscribe(
      data => {
        console.log(data)
        this.RawDataList = data['RawDataList'];
        if (this.RawDataList.length >= 0) {
          this.pageRawDataList = this.RawDataList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.RawDataList.length;
      }
    );

  }

  deleteRawData(data) {

    if (this.DeletePermission == true) {
      let body = {
        'RawId': data
      }
      console.log(body)
      this.rawDataService.deleterawdata(body).subscribe(
        data => {
          console.log(data)
          if (data['Success'] == true) {
            this.getRawDataList();
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

  filterBy(formValues) {
    // this.getVoucherList();
    console.log(formValues, 'filter values')
    console.log(formValues.keyWord, 'formValues.keyWord')

    let events = this.RawDataList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.RawDataList = filteredEvents;
      this.pageRawDataList = this.RawDataList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getRawDataList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageRawDataList = this.RawDataList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageRawDataList = this.RawDataList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
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
        this.deleteRawData(id)
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
