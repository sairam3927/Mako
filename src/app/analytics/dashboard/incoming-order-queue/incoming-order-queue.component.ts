import { AddPatientDataComponent } from './addPatientData/addPatientData.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddIncomingOrderComponent } from './add-incoming-order/add-incoming-order.component';
import { ProfileAndInsuranceDialogComponent } from './profile-and-insurance-dialog/profile-and-insurance-dialog.component'
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddDocumentsComponent } from './add-documents/add-documents.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AnalyticsService } from '../../analytics.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { RestrictionComponent } from 'src/app/shared/restriction/restriction.component';

@Component({
  selector: 'app-incoming-order-queue',
  templateUrl: './incoming-order-queue.component.html',
  styleUrls: ['./incoming-order-queue.component.scss'],
})
export class IncomingOrderQueueComponent implements OnInit {

  CreatePermission: any;
  ReadPermission: any;
  UpdatePermission: any;
  DeletePermission: any;

  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  fakedata: any;
  OrderList: any;
  pageOrderList: any;
  public todayDate: any = new Date();

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
    private analyticsService: AnalyticsService) {
    this.filterForm = this._fb.group({
      'keyWord': [null],
      'Age': [null],
      'fromDate': [new Date()],
      'toDate': [new Date()],
      'Pregnant': [false],
    });
  }

  public dateTime1: Date;
  public dateTime2: Date;
  referringOptions = ["Stephen McGill", "Otto Rieder", "Joe Deu-Ngoc", "Chris Soles", "Brad Kewalramani", "Michael Persaud", "Habib Kharsa"];
  stepsOptionSelected: any;
  age = [">30", "<30", ">=50", "<=50"];
  onStepsOptionsSelected(event) {
    console.log(event);
  }

  public addOrderDialog(id, action, item) {

    if (this.CreatePermission == true) {
      if (this.UpdatePermission == true) {
        let dialogRef = this.dialog.open(AddIncomingOrderComponent, {
          data: id,
          height: 'auto',
          width: '600px',
          autoFocus: false,
          disableClose: false

        });
        (<AddIncomingOrderComponent>dialogRef.componentInstance).id = id;
        (<AddIncomingOrderComponent>dialogRef.componentInstance).action = action;
        (<AddIncomingOrderComponent>dialogRef.componentInstance).item = item;
        dialogRef.afterClosed().subscribe(data => {
          this.getOrderList()
        });
      } else {
        this.restrictionDialog('Update');
      }
    } else {
      this.restrictionDialog('Create');
    }

  }

  ngOnInit() {

    // console.log(localStorage.getItem('Permissions'),'localStorage.getItem("Permissions")')
    let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
    console.log('Permissions: ', getPermissions);

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

    this.getOrderList();
  }

  getOrderList() {
    this.filterForm.reset();
    this.analyticsService.getorderslist().subscribe(
      data => {
        console.log(data)
        this.OrderList = data['OrdersList'];
        if (this.OrderList && this.OrderList.length >= 0) {
          this.pageOrderList = this.OrderList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.OrderList != null ? this.OrderList.length : 0;
      }
    );

  }

  deleteScope(data) {
    let body = {
      "OrdersId": data
    }
    if (this.DeletePermission == true) {
      this.analyticsService.deleteorder(body).subscribe(
        data => {
          console.log(data)
          if (data['Success'] == true) {
            this.getOrderList();
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

  checkRecieved(data) {
    let body = {
      "OrdersId": data
    }
    this.analyticsService.checkrecieved(body).subscribe(
      data => {
        console.log(data)
        if (data['Success'] == true) {
          this.getOrderList();
          this.alertService.createAlert('Successfully Deleted', 1);
        } else {
          this.alertService.createAlert('Something Went Wrong', 0);
        }

      }
    );

  }

  filterBy(formValues) {
    console.log(formValues, 'filter values')
    console.log(formValues.keyWord, 'formValues.keyWord')

    let events = this.OrderList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase())) &&
        (formValues.fromDate == undefined || new Date(x.OrderDate) >= new Date(formValues.fromDate)) &&
        (formValues.toDate == undefined || new Date(x.OrderDate) <= new Date(formValues.toDate)) &&
        (formValues.Pregnant == null || x.Pregnant_Lactate == formValues.Pregnant)
      );
      console.log(filteredEvents, 'filteredEventssadA')
      let filteredEvents2 = [];
      if (formValues.Age != null) {
        if (formValues.Age == ">30") {
          filteredEvents2 = filteredEvents.filter(x =>
            (formValues.Age == null || (x.Age) > 30)
          );
        }
        if (formValues.Age == "<30") {
          filteredEvents2 = filteredEvents.filter(x =>
            (formValues.Age == null || (x.Age) < 30)
          );
        }
        if (formValues.Age == ">=50") {
          filteredEvents2 = filteredEvents.filter(x =>
            (formValues.Age == null || (x.Age) >= 50)
          );
        }
        if (formValues.Age == "<=50") {
          filteredEvents2 = filteredEvents.filter(x =>
            (formValues.Age == null || (x.Age) <= 50)
          );
        }
      } else {
        filteredEvents2 = filteredEvents;
      }

      console.log(filteredEvents2, 'filteredEvents2')

      this.OrderList = filteredEvents2;
      this.pageOrderList = this.OrderList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getOrderList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageOrderList = this.OrderList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageOrderList = this.OrderList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
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

  public addPatientDataDialog() {
    let dialogRef = this.dialog.open(AddPatientDataComponent, {
      height: 'auto',
      width: '400px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openDocumentDialog(id) {
    let dialogRef = this.dialog.open(AddDocumentsComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
      disableClose: false
    });
    (<AddDocumentsComponent>dialogRef.componentInstance).id = id;
    dialogRef.afterClosed().subscribe(data => {
      this.getOrderList()
    });
  }
  public openInsuranceDialog(id) {
    let dialogRef = this.dialog.open(ProfileAndInsuranceDialogComponent, {
      data: id,
      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
