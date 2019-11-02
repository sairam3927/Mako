import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDRIComponent } from './addDRI/addDRI.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PersonalComponent } from '../Personal/Personal.component';
import { DriUploadCSVComponent } from './dri-upload-csv/dri-upload-csv.component';
import { DictionaryService } from '../dictionary.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestrictionComponent } from 'src/app/shared/restriction/restriction.component';

@Component({
  selector: 'app-DRI',
  templateUrl: './DRI.component.html',
  styleUrls: ['./DRI.component.scss']
})
export class DRIComponent implements OnInit {

  CreatePermission: any;
  ReadPermission: any;
  UpdatePermission: any;
  DeletePermission: any;

  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  fakedata: any;
  DRIList: any;
  pageDRIList: any;

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
        if (ScreenName == 'DRI') {
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

    this.getPhysicianList()
  }

  getPhysicianList() {
    this.filterForm.reset();
    this.dictionaryService.DRIgetsectionslist().subscribe(
      data => {
        console.log(data)
        this.DRIList = data['DriList'];
        if (this.DRIList.length >= 0) {
          this.pageDRIList = this.DRIList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.DRIList.length;
      }
    );

  }

  public addDriDialog(id, action, item) {
    if (this.UpdatePermission == true) {
      let dialogRef = this.dialog.open(AddDRIComponent, {
        height: 'auto',
        width: '600px',
        autoFocus: false,

      });
      (<AddDRIComponent>dialogRef.componentInstance).id = id;
      (<AddDRIComponent>dialogRef.componentInstance).action = action;
      (<AddDRIComponent>dialogRef.componentInstance).item = item;
      dialogRef.afterClosed().subscribe(data => {
        this.getPhysicianList()
      });
    } else {
      this.restrictionDialog('Update');
    }

  }

  public patientDataDialog() {
    let dialogRef = this.dialog.open(PersonalComponent, {
      height: 'auto',
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public UploadCSVDialog() {
    let dialogRef = this.dialog.open(DriUploadCSVComponent, {
      height: 'auto',
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


  deleteDRI(data) {
    let body = {
      'DRIid': data
    }
    if (this.DeletePermission == true) {
      this.dictionaryService.DRIdeletesection(body).subscribe(
        data => {
          console.log(data)
          if (data['Success'] == true) {
            this.getPhysicianList();
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

    let events = this.DRIList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.DRIList = filteredEvents;
      this.pageDRIList = this.DRIList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getPhysicianList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageDRIList = this.DRIList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageDRIList = this.DRIList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
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
