import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddTextDialogComponent } from './add-text-dialog/add-text-dialog.component';
import { AddMessageDialogComponent } from './add-message-dialog/add-message-dialog.component';

@Component({
  selector: 'app-text-log',
  templateUrl: './text-log.component.html',
  styleUrls: ['./text-log.component.scss']
})
export class TextLogComponent implements OnInit {
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
        {id:1 , patientName:"Fabrice" , dob:"02/05/1964", testName:"CT scan" , testLocation:"Graceland Sleep Lab" , apptDate:"18/07/2019", phone:"647-210-9935" , scheduler:"Siva" , orderingPhysician:"David", receivedDate:"03/03/2019",insurance:2},
        {id:2 , patientName:"Stephen" , dob:"09/07/1985", testName:"X Ray" , testLocation:"Baytown DX Ctr- 1113 W Baker 77521" , apptDate:"18/07/2019", phone:"405-589-6963" , scheduler:"Siva" , orderingPhysician:"Stokes", receivedDate:"21/04/2019",insurance:1},
        {id:3 , patientName:"Otto" , dob:"25/11/2010", testName:"Ultra-Sound" , testLocation:"Austin Family Med.-Sneed" , apptDate:"19/07/2019", phone:"987-025-6978" , scheduler:"Siva" , orderingPhysician:"Morgan", receivedDate:"29/04/2019",insurance:1},
        {id:4 , patientName:"Joe" , dob:"17/09/1966", testName:"ECG" , testLocation:"Graceland Sleep Lab" , apptDate:"20/07/2019", phone:"369-987-3693" , scheduler:"Siva" , orderingPhysician:"Steven", receivedDate:"17/05/2019",insurance:2},
        {id:5 , patientName:"Chris" , dob:"31/01/2000", testName:"MRI scan" , testLocation:"Munoz Family Practice 1" , apptDate:"21/07/2019", phone:"786-236-3267" , scheduler:"Siva" , orderingPhysician:"Liam Plunkeet", receivedDate:"22/05/2019",insurance:2}       
      ]
    }
    
    
    public openTextDialog(id) {
      let dialogRef = this.dialog.open(AddTextDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus:false
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    public openPatientMessageDialog(id) {
      let dialogRef = this.dialog.open(AddMessageDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus:false
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    
    deleteNewPatientOrder(){
      //this.alertService.createAlert('Successfully deleted.', 1);
    }

}
