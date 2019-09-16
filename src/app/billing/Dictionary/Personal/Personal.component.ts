import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-Personal',
  templateUrl: './Personal.component.html',
  styleUrls: ['./Personal.component.scss']
})
export class PersonalComponent implements OnInit {

  List:any;
  selectedValueStepType:string = "2"; 
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public alertService: AlertService,
    public dialogRef: MatDialogRef<PersonalComponent>) {
    }
  ngOnInit() {
    // if (this.selectedValueStepType == '2') {
      this.List = [
        {id:"1",rowRef:"Age : ",value:"text"},
        {id:"2",rowRef:"Sex : ",value:"gender"},
        {id:'3',rowRef:"Ethnicity : ",value:"DD"},
        {id:"4",rowRef:"Pregnant / Lactating : ",value:"p/l"},
      ];
    // }else{
    //   this.List = [
    //     {id:"1",rowRef:"Age : ",value:"text"},
    //     {id:"2",rowRef:"Sex : ",value:"gender"},
    //     {id:'3',rowRef:"Ethnicity : ",value:"DD"},
    //   ];
    // }
    
  }

  deletePatientOrder(){
    this.alertService.createAlert('Successfully deleted.', 1);       
  }

  saveOrder() {
    this.alertService.createAlert('Uploaded Successfully', 1);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }


}
