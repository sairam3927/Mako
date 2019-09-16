import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddScheduledVisitComponent } from './add-scheduled-visit/add-scheduled-visit.component';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { AddRemarksModalComponent } from '../unscheduled/add-remarks-modal/add-remarks-modal.component';

@Component({
  selector: 'app-scheduled-visit',
  templateUrl: './scheduled-visit.component.html',
  styleUrls: ['./scheduled-visit.component.scss']
})
export class ScheduledVisitComponent implements OnInit {

  tableList: any;

    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;

filterToggle: boolean;
toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  public dateTime2: Date;
  public dateTime3: Date;
  status = ["Active","Incative"];
  stepsOptionSelected: any;
  onStepsOptionsSelected(event){
   console.log(event); 
  }

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
    public dialog: MatDialog) {
    this.settings = this.appSettings.settings;
}

ngOnInit() {
    this.tableList = [  
      {id:1 , internalPhysician:"Jonny Bairstow" , caseNumber:"100235" , patient:"Kane Williamson" , remarks:"Add" , normal:5 , appointmentDate:"08/30/2019" , confirmationDate:"08/22/2019" , time:"03:30 PM" , selected:0 , select:1 , selecte:1},
      {id:2 , internalPhysician:"Eion Morgan" , caseNumber:"102547" , patient:"Ben Fokes" , remarks:"Add" , normal:6 , appointmentDate:"09/02/2019" , confirmationDate:"08/25/2019" , time:"09:30 AM" , selected:0 , select:2 , selecte:1},
      {id:3 , internalPhysician:"Jofra Archer" , caseNumber:"103647" , patient:"Martin Guptil" , remarks:"View" , normal:5 , appointmentDate:"09/02/2019" , confirmationDate:"08/25/2019" , time:"10: AM" , selected:4 , select:0 , selecte:1},
      {id:4 , internalPhysician:"Chris Wokes" , caseNumber:"012487" , patient:"Tom Latham" , remarks:"Add" , normal:5 , appointmentDate:"09/05/2019" , confirmationDate:"08/29/2019" , time:"04:15 PM" , selected:0 , select:2 , selecte:1},
      {id:5 , internalPhysician:"Ben Stokes" , caseNumber:"961247" , patient:"Lukie Ferguson" , remarks:"View" , normal:6 , appointmentDate:"09/10/2019" , confirmationDate:"08/30/2019" , time:"08:20 AM" , selected:1 , select:1 , selecte:1}
      ]
}



deleteVisit(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

  openVisitDialog(item) {
    let dialogRef = this.dialog.open(AddScheduledVisitComponent,{
      data:item,
      height:'auto',
      width:'600px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  openRemarksModal(item) {
    let dialogRef = this.dialog.open(AddRemarksModalComponent,{
      data:item,
      height:'auto',
      width:'600px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }
}
