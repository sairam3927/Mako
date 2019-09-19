import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { BillingService } from 'src/app/billing/billing.service';

@Component({
  selector: 'app-add-seq-result',
  templateUrl: './add-seq-result.component.html',
  styleUrls: ['./add-seq-result.component.scss']
})
export class AddSeqResultComponent implements OnInit {
  public data: Array<any>;

  constructor(
    public dialogRef: MatDialogRef<AddSeqResultComponent>,
    public fb: FormBuilder,
    private myService: BillingService
  ) {
    // debugger;  
    this.data = this.myService.getOption();
    console.log("received", this.data)
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
