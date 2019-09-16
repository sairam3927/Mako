import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AlertService } from '../../../../shared/services/alert.service';

@Component({
    selector: 'app-addDRI',
    templateUrl: './addDRI.component.html',
    styleUrls: ['./addDRI.component.scss']
  })

  export class AddDRIComponent implements OnInit {

    constructor(
                public dialogRef: MatDialogRef<AddDRIComponent>,
                public fb : FormBuilder,
                ) { }
  ngOnInit() {

  }

  saveOrder() {
    // this.alertService.createAlert('PatientData added successfully.', 1);
    this.dialogRef.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
  }