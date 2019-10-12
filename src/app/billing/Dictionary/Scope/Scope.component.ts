import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ScopeUploadCSVComponent } from './upload-csv/upload-csv.component';
import { PersonalComponent } from '../Personal/Personal.component';
import { AddScopeComponent } from './add-scope/add-scope.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DictionaryService } from '../dictionary.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';

@Component({
  selector: 'app-Scope',
  templateUrl: './Scope.component.html',
  styleUrls: ['./Scope.component.scss']
})
export class ScopeComponent implements OnInit {
  filterToggle:boolean;
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
    this.fakedata = [
      {id: "1" , AlleleName: "rs4846048",Gene:"LCT",Active:true,Description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted."},
      {id: "2" , AlleleName: "rs1537514",Gene:"TPK ",Active:false,Description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "3" , AlleleName: "rs868014",Gene:"ADA ",Active:false,Description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "4" , AlleleName: "rs2274976",Gene:"TPK",Active:true,Description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "5" , AlleleName: "tvc.novel.1",Gene:"ADA ",Active:true,Description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "6" , AlleleName: "tvc.novel.2",Gene:"LCT",Active:false,Description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "7" , AlleleName: "rs1801131",Gene:"TPK",Active:true,Description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." }
    ];
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
        this.totalSize = this.ScopeList !=null? this.ScopeList.length : 0;
      }
    );
    // this.ScopeList = this.fakedata;
    // if (this.ScopeList.length >= 0) {
    //   this.pageScopeList = this.ScopeList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    // }
    // this.totalSize = this.ScopeList.length;
  }

  public addScopeDialog(id, action, item) {
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
  }

  deleteScope(data) {
    let body = {
      'ScopeId': data
    }
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
  }

  public ConfirmDialog(id,data){
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: 'auto',
      width: '400px',
      autoFocus: false,
    });
    (<ConfirmDialogComponent>dialogRef.componentInstance).check = data;
    dialogRef.afterClosed().subscribe(data => {
      console.log("datr",data)
      if(data != undefined){
        this.checkActive(id,data);
      }else{
        this.getScopeList();
      }
    });
  }
  checkActive(data,active){
    let body = {
      'ScopeId': data,
      'Active':active
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
  public deleteDialog(id){
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log("datr",data)
      if (data == true){
        this.deleteScope(id)
      }
    });
  }

}