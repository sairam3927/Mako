import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-addAlgorithm',
    templateUrl: './addAlgorithm.component.html',
    styleUrls: ['./addAlgorithm.component.scss']
  })

  export class AddAlgorithmComponent implements OnInit {

    constructor(
                public dialogRef: MatDialogRef<AddAlgorithmComponent>,
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