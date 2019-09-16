import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrls: ['./scheduled.component.scss']
})
export class ScheduledComponent implements OnInit {

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
        {id:1 , patientName:"Fabrice Vanegas" , appointmentTime:"02:30 PM" , phone:"647-210-9935" , attorney:"Danial Joshi" , appointmentDate:"08/20/2019" , firstName:"Fabrice" , lastName:"Vanegas", dob:"02/05/1964", orderingPhysician:"David", internalPhysician:"Domenic Vinci" , receivedDate:"03/03/2019",insurance:"2"},
        {id:2 , patientName:"Stephen McGill" , appointmentTime:"03:00 PM" , phone:"369-697-9957" , attorney:"Rahul Tripathi" , appointmentDate:"08/22/2019"  , firstName:"Stephen" , lastName:"McGill", dob:"09/07/1985", orderingPhysician:"Stokes", internalPhysician:"Brad Kewalramani" , receivedDate:"21/04/2019",insurance:"1"},
        {id:3 , patientName:"Otto Rieder" , appointmentTime:"05:25 PM" , phone:"741-927-3641" , attorney:"John Bush" , appointmentDate:"08/25/2019"  , firstName:"Otto" , lastName:"Rieder", dob:"25/11/2010", orderingPhysician:"Morgan", internalPhysician:"Kipling Morton" , receivedDate:"29/04/2019",insurance:"1"},
        {id:4 , patientName:"Joe Deu-Ngoc" , appointmentTime:"07:55 PM" , phone:"752-201-9317" , attorney:"Mark Wood" , appointmentDate:"08/27/2019"  , firstName:"Joe" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderingPhysician:"Steven", internalPhysician:"Michael Persaud" , receivedDate:"17/05/2019",insurance:"2"},
        {id:5 , patientName:"Chris Soles" , appointmentTime:"10:00 PM" , phone:"570-320-2035" , attorney:"Kevin Brian" , appointmentDate:"09/05/2019"  , firstName:"Chris" , lastName:"Soles", dob:"31/01/2000", orderingPhysician:"Liam Plunkeet", internalPhysician:"Dan McCarthy" , receivedDate:"22/05/2019",insurance:"2"}       
      ]
    }
    
    
    public openAppointmentDialog(id) {
      let dialogRef = this.dialog.open(ScheduleAppointmentComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    
    deleteNewPatientOrder(){
      //this.alertService.createAlert('Successfully deleted.', 1);
    }

}
