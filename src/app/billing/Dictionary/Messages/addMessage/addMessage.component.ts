import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesComponent } from '../Messages.component';
import { BillingService } from 'src/app/billing/billing.service';


@Component({
    selector: 'app-addMessage',
    templateUrl: './addMessage.component.html',
    styleUrls: ['./addMessage.component.scss']
  })

  export class AddMessageComponent implements OnInit {

    public data: Array<any> ;  

    constructor(
                public dialogRef: MatDialogRef<AddMessageComponent>,
                public fb : FormBuilder,
                private myService: BillingService
                ) 
                {
                  // debugger;  
                 this.data = this.myService.getOption();
                 console.log("received",this.data)
                 }
  ngOnInit() {
    // this.List = ["rs121908936","rs228584","rs6031682"]
  }

  saveOrder() {
    // this.alertService.createAlert('PatientData added successfully.', 1);
    this.dialogRef.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
  }