import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DictionaryService } from '../../dictionary.service';

@Component({
  selector: 'app-uploadCSV',
  templateUrl: './uploadCSV.component.html',
  styleUrls: ['./uploadCSV.component.scss']
})

export class UploadCSVComponent implements OnInit {

  myFiles: string[] = [];
  sMsg: string = '';
  errorList = [];
  constructor(public dialogRef: MatDialogRef<UploadCSVComponent>,  private dictionaryService: DictionaryService,
    public alertService: AlertService,
    public fb: FormBuilder) {
  }

  ngOnInit() {
  }

  getFileDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }

  uploadFiles() {
    const frmData = new FormData();

    if (this.myFiles.length == 0) {
      this.alertService.createAlert('Please choose the file', 0);
    }else{
      for (var i = 0; i < this.myFiles.length; i++) {
        frmData.append("fileUpload", this.myFiles[i]);
      }
      console.log(frmData)
      this.dictionaryService.upsertsequence_results_mastercsv(frmData).subscribe(
        data => {
          // SHOW A MESSAGE RECEIVED FROM THE WEB API.
          this.sMsg = data as string;
          console.log(data);
          let Response = data['Response']
  
          if (Response['Success'] == true) {
            this.alertService.createAlert('SEQ Results successfully updated', 1);
            this.close();
          } else {
            this.alertService.createAlert(Response['Message'], 0);
            this.errorList = data['ErrorList']
            console.log("this.errorList", this.errorList)
          }
        }
      );
    }
  }

  close(): void {
    this.dialogRef.close();
  }


}