import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddTestComponent } from './add-test/add-test.component';
import { UploadTestComponent } from './upload-test/upload-test.component';
import { LogicTestsComponent } from './logic-tests/logic-tests.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DictionaryService } from '../dictionary.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  filterToggle:boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  fakedata: any;
  TestList: any;
  pageTestList: any;

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
    this.getTestList();
  }

  getTestList() {
    this.filterForm.reset();
    this.dictionaryService.gettestslist().subscribe(
      data => {
        console.log(data)
        this.TestList = data['data'];
        if (this.TestList.length >= 0) {
          this.pageTestList = this.TestList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.TestList.length;
      }
    );
    
  }

  public addTestDialog(id, action, item) {
    let dialogRef = this.dialog.open(AddTestComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,

    });
    (<AddTestComponent>dialogRef.componentInstance).id = id;
    (<AddTestComponent>dialogRef.componentInstance).action = action;
    (<AddTestComponent>dialogRef.componentInstance).item = item;
    dialogRef.afterClosed().subscribe(data => {
      this.getTestList();
    });
  }

  deleteTest(data) {
    let body = {
      'TestsId': data
    }
    console.log("this.deleteTest",body)
    this.dictionaryService.deletetests(body).subscribe(
      data => {
        console.log(data)
        if (data['Success'] == true) {
          this.getTestList();
          this.alertService.createAlert('Successfully Deleted', 1);
        } else {
          this.alertService.createAlert('Something Went Wrong', 0);
        }

      }
    );
  }

  filterBy(formValues) {
    // this.getVoucherList();
    console.log(formValues, 'filter values')
    console.log(formValues.keyWord, 'formValues.keyWord')

    let events = this.TestList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.TestList = filteredEvents;
      this.pageTestList = this.TestList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getTestList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageTestList = this.TestList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageTestList = this.TestList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
  }

  public deleteDialog(id){
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log("datr",data)
      if (data == true){
        this.deleteTest(id)
      }
    });
  }

  // public patientDataDialog() {
  //   let dialogRef = this.dialog.open(AddTestComponent, {
  //     height: 'auto',
  //     width: '500px',
  //     autoFocus: false,
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  
  // public uploadCSVTestDialog() {
  //   let dialogRef = this.dialog.open(UploadTestComponent, {
  //     height: 'auto',
  //     width: '400px',
  //     autoFocus: false,
      
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  // public openLogicDialog() {
  //   let dialogRef = this.dialog.open(LogicTestsComponent, {
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false,
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  
}
