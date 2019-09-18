import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

export interface Sample {
  value: string;
  viewValue: string;
}

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

  ethnicitys: Sample[] = [
    { value: '0', viewValue: 'Non-Hispanic White' },
    { value: '1', viewValue: 'Hispanic' },
    { value: '2', viewValue: 'African American' },
    { value: '3', viewValue: 'Asian' },
    { value: '4', viewValue: 'Others' }
  ];
  constructor(public alertService: AlertService,
    public dialogRef: MatDialogRef<PersonalComponent>) {
    }
  ngOnInit() {
    // if (this.selectedValueStepType == '2') {
      this.List = [
        {id:"1",rowRef:"Age : ",value:"text"},
        {id:"2",rowRef:"Sex : ",value:"gender"},
        {id:"3",rowRef:"Pregnant / Lactating : ",value:"p/l"},
        {id:'4',rowRef:"Ethnicity : ",value:"DD"},
        
      ];
      
    // }else{
    //   this.List = [
    //     {id:"1",rowRef:"Age : ",value:"text"},
    //     {id:"2",rowRef:"Sex : ",value:"gender"},
    //     {id:'3',rowRef:"Ethnicity : ",value:"DD"},
    //   ];
    // }
    
  }
  private selectedLink: string = "Male";
  setradio(e: string): void {
    this.selectedLink = e;
  }
  isSelected(name: string): boolean {
    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }
    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
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
