import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {
  tableList:any;
  
  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  //public form:FormGroup;
  currDate = new Date();
  selected=0;
  se = 1;
  sel = 5;
  s = 0;
  citySelect=6;
  select=2;
  selects=2;
  dateNew = new Date(new Date().setHours(0,0,0,0));
  dates = new Date(new Date().setHours(0,0,0,0));

  constructor() { }

  ngOnInit() {
    this.tableList = [  
      {id:1 , patientName:"Fabrice Vanegas" , firstName:"Fabrice" , lastName:"Vanegas", dob:"02/05/1964", orderId:"1257963" , orderingPhysician:"David", receivedDate:"03/03/2019",insurance:2, status:true, testsPlanned:7 , testsDone:0},
      // {id:2 , patientName:"Stephen McGill" , firstName:"Stephen" , lastName:"McGill", dob:"09/07/1985", orderId:"5897429" , orderingPhysician:"Stokes", receivedDate:"21/04/2019",insurance:1, status:false, testsPlanned:3 , testsDone:0},
      // {id:3 , patientName:"Otto Rieder" , firstName:"Otto" , lastName:"Rieder", dob:"25/11/2010", orderId:"2368254" , orderingPhysician:"Morgan", receivedDate:"29/04/2019",insurance:1, status:false, testsPlanned:4 , testsDone:1},
      // {id:4 , patientName:"Joe Deu-Ngoc" , firstName:"Joe" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderId:"1289637" , orderingPhysician:"Steven", receivedDate:"17/05/2019",insurance:2, status:true, testsPlanned:1 , testsDone:0},
      // {id:5 , patientName:"Chris Soles" , firstName:"Chris" , lastName:"Soles", dob:"31/01/2000", orderId:"2345873" , orderingPhysician:"Liam Plunkeet", receivedDate:"22/05/2019",insurance:2, status:true, testsPlanned:2 , testsDone:1}
    ]
  }

}
