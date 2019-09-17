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
      {id:"1",StepTitle:"Step 1.1",StepType:"Condition",StepValue:"This is a valid case",ResultCode:"ALGO 3587"},
      {id:"1",StepTitle:"Step 1.2",StepType:"Formula",StepValue:"1.5",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.3",StepType:"Condition",StepValue:"1.8",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.4",StepType:"Formula",StepValue:"2.5",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.5",StepType:"Condition",StepValue:"3.6",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.6",StepType:"Formula",StepValue:"4.5",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.7",StepType:"Condition",StepValue:"5.5",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.8",StepType:"Formula",StepValue:"7.2",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 1.9",StepType:"Condition",StepValue:"6.2",ResultCode:"ALGO 7589"},
      {id:"1",StepTitle:"Step 2.0",StepType:"Formula",StepValue:"5.5",ResultCode:"ALGO 7589"},
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

}
