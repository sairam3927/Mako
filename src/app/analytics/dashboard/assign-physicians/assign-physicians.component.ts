import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AssignPhysicianComponent } from './assign-physician/assign-physician.component'

@Component({
  selector: 'app-assign-physicians',
  templateUrl: './assign-physicians.component.html',
  styleUrls: ['./assign-physicians.component.scss']
})
export class AssignPhysiciansComponent implements OnInit {

  tableList: any;
  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  
  filterToggle: boolean;
  
  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
    }
    
    ngOnInit() {
      this.tableList = [  
        {id:1 , patientName:"Fabrice Vanegas" , firstName:"Fabrice" , lastName:"Vanegas", dob:"02/05/1964", orderingPhysician:"David", internalPhysician:"Domenic Vinci" , receivedDate:"03/03/2019",insurance:"2"},
        {id:2 , patientName:"Stephen McGill" , firstName:"Stephen" , lastName:"McGill", dob:"09/07/1985", orderingPhysician:"Stokes", internalPhysician:"Brad Kewalramani" , receivedDate:"21/04/2019",insurance:"1"},
        {id:3 , patientName:"Otto Rieder" , firstName:"Otto" , lastName:"Rieder", dob:"25/11/2010", orderingPhysician:"Morgan", internalPhysician:"Kipling Morton" , receivedDate:"29/04/2019",insurance:"1"},
        {id:4 , patientName:"Joe Deu-Ngoc" , firstName:"Joe" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderingPhysician:"Steven", internalPhysician:"Michael Persaud" , receivedDate:"17/05/2019",insurance:"2"},
        {id:5 , patientName:"Chris Soles" , firstName:"Chris" , lastName:"Soles", dob:"31/01/2000", orderingPhysician:"Liam Plunkeet", internalPhysician:"Dan McCarthy" , receivedDate:"22/05/2019",insurance:"2"}       
      ]
    }
    
    
    public openNewPatientDialog(id) {
      let dialogRef = this.dialog.open(AssignPhysicianComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    public openPatientInsuranceDialog(id) {
      let dialogRef = this.dialog.open(AssignPhysicianComponent, {
        data: id,
        height: 'auto',
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    
    deleteNewPatientOrder(){
      //this.alertService.createAlert('Successfully deleted.', 1);
    }

}
