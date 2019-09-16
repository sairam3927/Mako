import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
    selector: 'app-addPatientData',
    templateUrl: './addPatientData.component.html',
    styleUrls: ['./addPatientData.component.scss']
  })

  export class AddPatientDataComponent implements OnInit {

    constructor(public alertService : AlertService,
                public dialogRef: MatDialogRef<AddPatientDataComponent>,
                public fb : FormBuilder,
                ) { }
  ngOnInit() {

  }

  saveOrder() {
    this.alertService.createAlert('PatientData added successfully.', 1);
    this.dialogRef.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
  }