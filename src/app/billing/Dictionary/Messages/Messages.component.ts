import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMessageComponent } from './addMessage/addMessage.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { BillingService } from '../../billing.service';
import { MessagesUploadComponent } from './messages-upload/messages-upload.component';
import { PersonalComponent } from '../Personal/Personal.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DictionaryService } from '../dictionary.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
 
@Component({
  selector: 'app-Messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss']
})
export class MessagesComponent implements OnInit {

  filterToggle:boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  fakedata: any;
  MessageList: any;
  pageMessageList: any;

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
    this.getMessageList();
  }

  getMessageList() {
    this.filterForm.reset();
    this.dictionaryService.getmessageslist().subscribe(
      data => {
        console.log(data)
        this.MessageList = data['MessagesList'];
        if (this.MessageList.length >= 0) {
          this.pageMessageList = this.MessageList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.MessageList.length;
      }
    );
    // this.SectionList = this.fakedata;
    // if (this.SectionList.length >= 0) {
    //   this.pageMessageList = this.SectionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    // }
    // this.totalSize = this.SectionList.length;
  }

  public addMessageDialog(id, action, item) {
    let dialogRef = this.dialog.open(AddMessageComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,

    });
    (<AddMessageComponent>dialogRef.componentInstance).id = id;
    (<AddMessageComponent>dialogRef.componentInstance).action = action;
    (<AddMessageComponent>dialogRef.componentInstance).item = item;
    dialogRef.afterClosed().subscribe(data => {
      this.getMessageList();
    });
  }

  deleteMessages(data) {
    let body = {
      'MessagesId': data
    }
    this.dictionaryService.deletemessage(body).subscribe(
      data => {
        console.log(data)
        if (data['Success'] == true) {
          this.getMessageList();
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

    let events = this.MessageList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.MessageList = filteredEvents;
      this.pageMessageList = this.MessageList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getMessageList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageMessageList = this.MessageList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageMessageList = this.MessageList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
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
        this.deleteMessages(id)
      }
    });
  }

  // public uploadDialog() {
  //   let dialogRef = this.dialog.open(MessagesUploadComponent, {
  //     height: 'auto',
  //     width: '400px',
  //     autoFocus: false,
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

}
