import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.scss']
})
export class ConfirmedComponent implements OnInit {

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
  referringOptions = ["Stephen McGill","Otto Rieder","Joe Deu-Ngoc","Chris Soles","Brad Kewalramani","Michael Persaud","Habib Kharsa"];
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
        {id:1 , patientName:"Fabrice Vanegas" , phone:"647-210-9935" , attorney:"Danial Joshi" , appointmentDate:"08/20/2019" , firstName:"Fabrice" , lastName:"Vanegas", dob:"02/05/1964", orderingPhysician:"David", internalPhysician:"Domenic Vinci" , receivedDate:"03/03/2019",insurance:"2",status:"Confirmed"},
        {id:2 , patientName:"Stephen McGill" , phone:"971-510-6935" , attorney:"Rahul Tripathi" , appointmentDate:"08/22/2019"  , firstName:"Stephen" , lastName:"McGill", dob:"09/07/1985", orderingPhysician:"Stokes", internalPhysician:"Brad Kewalramani" , receivedDate:"21/04/2019",insurance:"1",status:"Confirmed"},
        {id:3 , patientName:"Otto Rieder" , phone:"647-204-9687" , attorney:"John Bush" , appointmentDate:"08/25/2019"  , firstName:"Otto" , lastName:"Rieder", dob:"25/11/2010", orderingPhysician:"Morgan", internalPhysician:"Kipling Morton" , receivedDate:"29/04/2019",insurance:"1",status:"Confirmed"},
        {id:4 , patientName:"Joe Deu-Ngoc" , phone:"617-984-7025" , attorney:"Mark Wood" , appointmentDate:"08/27/2019"  , firstName:"Joe" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderingPhysician:"Steven", internalPhysician:"Michael Persaud" , receivedDate:"17/05/2019",insurance:"2",status:"Confirmed"},
        {id:5 , patientName:"Chris Soles" , phone:"639-715-3021" , attorney:"Kevin Brian" , appointmentDate:"09/05/2019"  , firstName:"Chris" , lastName:"Soles", dob:"31/01/2000", orderingPhysician:"Liam Plunkeet", internalPhysician:"Dan McCarthy" , receivedDate:"22/05/2019",insurance:"2",status:"Confirmed"}       
      ]
    }
    
    deleteNewPatientOrder(){
      //this.alertService.createAlert('Successfully deleted.', 1);
    }


}
