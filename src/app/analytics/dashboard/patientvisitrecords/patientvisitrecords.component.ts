import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddNewPatientVisitComponent } from './add-new-patient-visit/add-new-patient-visit.component';
import { AnnNotesDialogComponent } from './ann-notes-dialog/ann-notes-dialog.component';
import { OpenDocxDialogComponent } from './open-docx-dialog/open-docx-dialog.component';

@Component({
  selector: 'app-patientvisitrecords',
  templateUrl: './patientvisitrecords.component.html',
  styleUrls: ['./patientvisitrecords.component.scss']
})
export class PatientvisitrecordsComponent implements OnInit {

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
        {id:1 , patientName:"Fabrice Vanegas" , firstName:"Fabrice" , lastName:"Vanegas", dob:"02/05/1964", orderId:"1257963" , orderingPhysician:"David", receivedDate:"03/03/2019",insurance:2},
        {id:2 , patientName:"Stephen McGill" , firstName:"Stephen" , lastName:"McGill", dob:"09/07/1985", orderId:"5897429" , orderingPhysician:"Stokes", receivedDate:"21/04/2019",insurance:1},
        {id:3 , patientName:"Otto Rieder" , firstName:"Otto" , lastName:"Rieder", dob:"25/11/2010", orderId:"2368254" , orderingPhysician:"Morgan", receivedDate:"29/04/2019",insurance:1},
        {id:4 , patientName:"Joe Deu-Ngoc" , firstName:"Joe" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderId:"1289637" , orderingPhysician:"Steven", receivedDate:"17/05/2019",insurance:2},
        {id:5 , patientName:"Chris Soles" , firstName:"Chris" , lastName:"Soles", dob:"31/01/2000", orderId:"2345873" , orderingPhysician:"Liam Plunkeet", receivedDate:"22/05/2019",insurance:2}       
      ]
    }
    

    public openVisitRecordDialog(id) {
      let dialogRef = this.dialog.open(AddNewPatientVisitComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus:false
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    public openNotesDialog(id) {
      let dialogRef = this.dialog.open(AnnNotesDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    public openDocxDialog(id) {
      let dialogRef = this.dialog.open(OpenDocxDialogComponent, {
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
