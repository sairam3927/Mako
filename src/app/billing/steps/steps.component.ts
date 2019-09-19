import { Component, OnInit } from '@angular/core';
import { AddStepsComponent } from './add-steps/add-steps.component';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  List:any;
  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialog: MatDialog,private alertService : AlertService) { }

  ngOnInit() {
    this.List=[
      {id:"1",StepTitle:"Step 1.1",StepValueType:"Text", StepType:"Condition",StepValue:"Daily Thiamine intake of at least 1,4 mg during pregnancy and lactation.",ResultCode:"ALGO 3587"},
      {id:"1",StepTitle:"Step 1.2",StepValueType:"Numeric", StepType:"Formula",StepValue:"1.5",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.3",StepValueType:"Numeric", StepType:"Condition",StepValue:"1.8",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.4",StepValueType:"Numeric", StepType:"Formula",StepValue:"2.5",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.5",StepValueType:"Text", StepType:"Condition",StepValue:"This maternal genotype requires in increase intake of Thiamine(Vitamin B1) during pregnancy and breastfeeding.",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.6",StepValueType:"Text", StepType:"Formula",StepValue:"This maternal genotype requires a reduction of Adenosine intake from foods, during pregnancy and breastfeeding.",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.7",StepValueType:"Numeric", StepType:"Condition",StepValue:"5.5",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.8",StepValueType:"Numeric", StepType:"Formula",StepValue:"7.2",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.9",StepValueType:"Text", StepType:"Condition",StepValue:"This maternal genotype requires in increase intake of Vitamin C during pregnancy and breastfeeding.",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 2.0",StepValueType:"Numeric", StepType:"Formula",StepValue:"5.5",ResultCode:"ALGO 7589"},
    ];
  }

  public addStepDialog() {
    let dialogRef = this.dialog.open(AddStepsComponent, {
      height: 'auto',
      width: '800px',
      autoFocus: false,
      
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deletePatientOrder(){
    this.alertService.createAlert('Successfully deleted.', 1);
  }

}
