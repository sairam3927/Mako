import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddNewPatientOrdersComponent } from './add-new-patient-orders/add-new-patient-orders.component';

@Component({
  selector: 'app-manage-patient-orders',
  templateUrl: './manage-patient-orders.component.html',
  styleUrls: ['./manage-patient-orders.component.scss']
})
export class ManagePatientOrdersComponent implements OnInit {

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
  statusOptions = ["Active","Inactive"];
  

  
  
  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
    }
    
    ngOnInit() {
      this.tableList = [  
        {id:1 , patientName:"Fabrice Vanegas" , attorney:"Mark Boucher" , firstName:"Fabrice" , lastName:"Vanegas", dob:"02/05/1964", orderId:"1257963" , orderingPhysician:"David", receivedDate:"03/03/2019",insurance:2, status:true, testsPlanned:7 , testsDone:0 , incidentDate:"03/02/2019" , email:"fabrice@gmail.com" , phone:"+1-408-525-2036"},
        {id:2 , patientName:"Stephen McGill" , attorney:"Billy Bowden" , firstName:"Stephen" , lastName:"McGill", dob:"09/07/1985", orderId:"5897429" , orderingPhysician:"Stokes", receivedDate:"21/04/2019",insurance:1, status:false, testsPlanned:3 , testsDone:0 , incidentDate:"04/21/2019" , email:"stephen@yahoo.co.in" , phone:"+1-408-127-2096"},
        {id:3 , patientName:"Otto Rieder" , attorney:"Adam Voges" , firstName:"Otto" , lastName:"Rieder", dob:"25/11/2010", orderId:"2368254" , orderingPhysician:"Morgan", receivedDate:"29/04/2019",insurance:1, status:false, testsPlanned:4 , testsDone:1 , incidentDate:"04/28/2019" , email:"ottoRider@gmail.com" , phone:"+1-120-748-5012"},
        {id:4 , patientName:"Joe Deu-Ngoc" , attorney:"Luke Wright" , firstName:"Joe" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderId:"1289637" , orderingPhysician:"Steven", receivedDate:"17/05/2019",insurance:2, status:true, testsPlanned:1 , testsDone:0 , incidentDate:"05/15/2019" , email:"joe@gmail.com" , phone:"+1-850-697-1041"},
        {id:5 , patientName:"Chris Soles" , attorney:"Langer" , firstName:"Chris" , lastName:"Soles", dob:"31/01/2000", orderId:"2345873" , orderingPhysician:"Liam Plunkeet", receivedDate:"22/05/2019",insurance:2, status:true, testsPlanned:2 , testsDone:1 , incidentDate:"05/22/2019" , email:"chris@yahoo.co.in" , phone:"+1-170-850-2036"}
      ]
    }
    

    public openNewPatientDialog(id) {
      let dialogRef = this.dialog.open(AddNewPatientOrdersComponent, {
        data: id,
        height: 'auto',
        width: '700px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    // public openPatientInsuranceDialog(id) {
    //   let dialogRef = this.dialog.open(InsuranceDialogComponent, {
    //     data: id,
    //     height: 'auto',
    //     width: '600px'
    //   });
    //   dialogRef.afterClosed().subscribe(data => {
    //   });
    // }
    
   

   
    
    deleteNewPatientOrder(){
      //this.alertService.createAlert('Successfully deleted.', 1);
    }

}
