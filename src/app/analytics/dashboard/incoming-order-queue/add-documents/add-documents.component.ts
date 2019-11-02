import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExcelServicesService } from 'src/app/services/excel-services.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RawDataService } from 'src/app/reports/raw-data.service';
import { AnalyticsService } from 'src/app/analytics/analytics.service';

@Component({
  selector: 'app-add-documents',
  templateUrl: './add-documents.component.html',
  styleUrls: ['./add-documents.component.scss']
})
export class AddDocumentsComponent implements OnInit {

  id: any;
  myFiles: string[] = [];
  sMsg: string = '';
  errorList = [];
  selected: any;

  public pageSize = 10;
  public pageSizeTemp = this.pageSize;
  public currentPage = 0;
  public totalSize = 0;
  public currentPageTemp = 0;
  public totalSizeTemp = 0;

  DocumentList: any;
  pageDocumentList: any;
  public dateTime1: Date;
  public dateTime2: Date;
  incomingOrderForm: FormGroup;
  // gender = ["Male", "Female", "Others"];
  //public form:FormGroup;
  selectedValueStepType: string = "0";
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());
  Form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddDocumentsComponent>, private analyticsService: AnalyticsService,
    public alertService: AlertService,
    public fb: FormBuilder) {
    this.Form = this.fb.group({
      'DocumentTitle': [''],
    });
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let body = {
      OrderId: this.id,
    }
    this.analyticsService.getdocs_datalist(body).subscribe(
      data => {
        console.log(data);
        this.DocumentList = data["DocDataList"];
        if (this.DocumentList != null && this.DocumentList.length >= 0) {
          this.pageDocumentList = this.DocumentList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.DocumentList != null ? this.DocumentList.length : 0;
      }
    );
  }

  getFileDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }

  uploadFiles() {

    if (this.myFiles.length == 0) {
      this.alertService.createAlert('Please Choose the file', 0);
    } else {
      const frmData = new FormData();
      for (var i = 0; i < this.myFiles.length; i++) {
        frmData.append("OrderId", this.id);
        frmData.append("DocumentTitle", this.Form.value.DocumentTitle);
        frmData.append("FileName", this.myFiles[i]);
      }

      console.log("body", frmData);
      this.analyticsService.addorder_docscsv(frmData).subscribe(
        data => {

          console.log(data);
          // let Response = data['Response']

          if (data['Success'] == true) {
            this.alertService.createAlert(data['Message'], 1);
            this.getData();
          } else {
            this.alertService.createAlert('Something Went Wrong', 0);
          }
        }
      );
    }

  }

  close(): void {
    this.dialogRef.close();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageDocumentList = this.DocumentList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageDocumentList = this.DocumentList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
  }

  downloadMyFile(href) {
    let filtHref = href.substr(31);
    console.log("filtHref", filtHref)
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', filtHref);
    // link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
