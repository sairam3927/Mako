import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExcelServicesService } from 'src/app/services/excel-services.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RawDataService } from '../../raw-data.service';


@Component({
  selector: 'app-upload-raw-data',
  templateUrl: './upload-raw-data.component.html',
  styleUrls: ['./upload-raw-data.component.scss']
}) 
export class UploadRawDataComponent implements OnInit {

  myFiles: string[] = [];
  sMsg: string = '';
  errorList = [];
  selected:any;
  constructor(public dialogRef: MatDialogRef<UploadRawDataComponent>, private rawDataService: RawDataService,
    public alertService: AlertService,
    public fb: FormBuilder, private excelService: ExcelServicesService, private http: HttpClient,
    private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.selected = localStorage.getItem('lang') ? localStorage.getItem('lang') : '1';
  }

  getFileDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }

  uploadFiles() {
    const frmData = new FormData();

    for (var i = 0; i < this.myFiles.length; i++) {
      frmData.append("fileUpload", this.myFiles[i]);
    }
    this.rawDataService.upload_raw_data(frmData).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
        // this.sMsg = data as string;
        // console.log(data);
        // let Response = data['Response']

        if (data['Success'] == true) {
          this.alertService.createAlert(data['Message'], 1);
          this.close();
        }else{
          this.alertService.createAlert('Something Went Wrong', 0);
          // this.errorList = data['ErrorList']
          // console.log("this.errorList",this.errorList)
        }
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }


}

