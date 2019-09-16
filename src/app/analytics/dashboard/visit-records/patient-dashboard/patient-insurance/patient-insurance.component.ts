import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { AddInsurancePatientDashboardComponent } from './add-insurance-patient-dashboard/add-insurance-patient-dashboard.component';

@Component({
  selector: 'app-patient-insurance',
  templateUrl: './patient-insurance.component.html',
  styleUrls: ['./patient-insurance.component.scss']
})
export class PatientInsuranceComponent implements OnInit {

  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
    }
  selected=7;
  tableList:any;
  select=0;
  chosenItem=1;
  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  //public form:FormGroup;
  currDate = new Date();
  dates = new Date(new Date().setHours(0,0,0,0));

  ngOnInit() {
    this.tableList = [  
      {id:1 , insuranceCompany:"HMO BLUE TEXAS" , type:"Primary" , insuredName:"Fabrice Vanegas" , insuredDob:"02/05/1964" , sex:"Male" , address:"1317 Lake Pointe Pkwy Sugar Land TX 77478" , relationship:"Self" , phone:"647-210-9935" , orderingPhysician:"David", receivedDate:"03/03/2019"},
      {id:2 , insuranceCompany:"AMERIGROUP" , type:"Secondary" , insuredName:"Fabrice Vanegas" , insuredDob:"02/05/1964" , sex:"Male" , address:"1317 Lake Pointe Pkwy Sugar Land TX 77478" , relationship:"Self" , phone:"647-210-9935" , orderingPhysician:"Stokes", receivedDate:"21/04/2019"},
      // {id:3 , firstName:"Otto" , lastName:"Rieder", dob:"25/11/2010", orderingPhysician:"Morgan", receivedDate:"29/04/2019"},
      // {id:4 , firstName:"Joe" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderingPhysician:"Steven", receivedDate:"17/05/2019"},
      // {id:5 , firstName:"Chris" , lastName:"Soles", dob:"31/01/2000", orderingPhysician:"Liam Plunkeet", receivedDate:"22/05/2019"}       
    ]
  }

  public openPatientInsuranceDialog(id) {
    let dialogRef = this.dialog.open(AddInsurancePatientDashboardComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
  
  
 



}
