import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { AddUnscheduledVisitComponent } from './add-unscheduled-visit/add-unscheduled-visit.component';
import { AddRemarksModalComponent } from './add-remarks-modal/add-remarks-modal.component';
import { ScheduleAVisitComponent } from './schedule-a-visit/schedule-a-visit.component';

@Component({
  selector: 'app-unscheduled',
  templateUrl: './unscheduled.component.html',
  styleUrls: ['./unscheduled.component.scss']
})
export class UnscheduledComponent implements OnInit {

 

  
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
      {id:1 , attorney:"Fabrice Vanegas" , email:"fabrice@gmail.com" , phone:"408-444-0058", status:true , referringPhysician:"Jonny Bairstow" , caseNumber:"100235" , patient:"Kane Williamson" , remarks:"Add" , normal:5},
      {id:2 , attorney:"Stephen McGill" , email:"Stephen@gmail.com" , phone:"127-256-5528", status:true , referringPhysician:"Eion Morgan" , caseNumber:"102547" , patient:"Ben Fokes" , remarks:"Add" , normal:6},
      {id:3 , attorney:"Otto Rieder" , email:"Rieder@gmail.com" , phone:"647-210-9935", status:false , referringPhysician:"Jofra Archer" , caseNumber:"103647" , patient:"Martin Guptil" , remarks:"View" , normal:5},
      {id:4 , attorney:"Joe Deu-Ngoc" , email:"Deu-Ngoc@gmail.com" , phone:"657-2506-0096", status:true , referringPhysician:"Chris Wokes" , caseNumber:"012487" , patient:"Tom Latham" , remarks:"Add" , normal:5},
      {id:5 , attorney:"Chris Soles" , email:"Chris@gmail.com" , phone:"987-236-5858", status:false , referringPhysician:"Ben Stokes" , caseNumber:"961247" , patient:"Lukie Ferguson" , remarks:"View" , normal:6}
      ]
}



deleteVisit(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

  openVisitDialog(item) {
    let dialogRef = this.dialog.open(AddUnscheduledVisitComponent,{
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

  openSchedulaAVisitDialog(item) {
    let dialogRef = this.dialog.open(ScheduleAVisitComponent,{
      data:item,
      height:'auto',
      width:'600px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  

}
