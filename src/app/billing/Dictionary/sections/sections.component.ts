import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DictionaryService } from '../dictionary.service';
import { AddSectionComponent } from './add-section/add-section.component';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { RestrictionComponent } from 'src/app/shared/restriction/restriction.component';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  CreatePermission: any;
  ReadPermission: any;
  UpdatePermission: any;
  DeletePermission: any;

  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  fakedata: any;
  SectionList: any;
  pageSectionList: any;

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
        if (ScreenName == 'Sections') {
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

    this.getSectionList();
  }

  getSectionList() {
    this.filterForm.reset();
    this.dictionaryService.Sectionsgetlist().subscribe(
      data => {
        console.log(data)
        this.SectionList = data['SectionsList'];
        if (this.SectionList.length >= 0) {
          this.pageSectionList = this.SectionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.SectionList.length;
      }
    );

  }

  public addSectionDialog(id, action, item) {
    if (this.UpdatePermission == true) {
      let dialogRef = this.dialog.open(AddSectionComponent, {
        height: 'auto',
        width: '600px',
        autoFocus: false,

      });
      (<AddSectionComponent>dialogRef.componentInstance).id = id;
      (<AddSectionComponent>dialogRef.componentInstance).action = action;
      (<AddSectionComponent>dialogRef.componentInstance).item = item;
      dialogRef.afterClosed().subscribe(data => {
        this.getSectionList();
      });
    } else {
      this.restrictionDialog('Update');
    }

  }

  deleteSection(data) {
    let body = {
      'SectionsId': data
    }
    if (this.DeletePermission == true) {
      this.dictionaryService.Sectionsdelete(body).subscribe(
        data => {
          console.log(data)
          if (data['Success'] == true) {
            this.getSectionList();
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

    let events = this.SectionList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.SectionList = filteredEvents;
      this.pageSectionList = this.SectionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getSectionList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageSectionList = this.SectionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageSectionList = this.SectionList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
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
        this.deleteSection(id)
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
