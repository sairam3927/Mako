import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AddEmailTemplateComponent } from './add-email-template/add-email-template.component'

@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.scss']
})
export class EmailTemplatesComponent implements OnInit {

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
  templates = ["CT Scan","X-Ray","Ultra Sound","MRI Scan","ECG"];
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
        {id:1 , templateName:"DME Follow Up 3" , testName:"DME Follow Up 3", dob:"02/05/1964", orderId:"1257963" , orderingPhysician:"David", updatedDate:"03/03/2019",insurance:2, status:true},
        {id:2 , templateName:"DME Rental" , testName:"DME Rental", dob:"09/07/1985", orderId:"5897429" , orderingPhysician:"Stokes", updatedDate:"21/04/2019",insurance:1, status:false},
        {id:3 , templateName:"Appointment" , testName:"Appointment", dob:"25/11/2010", orderId:"2368254" , orderingPhysician:"Morgan", updatedDate:"29/04/2019",insurance:1, status:true},
        {id:4 , templateName:"CT Scan" , testName:"CT Scan", dob:"17/09/1966", orderId:"1289637" , orderingPhysician:"Steven", updatedDate:"17/05/2019",insurance:2, status:false},
        {id:5 , templateName:"Ultra Sound" , testName:"Ultra Sound", dob:"31/01/2000", orderId:"2345873" , orderingPhysician:"Liam Plunkeet", updatedDate:"22/05/2019",insurance:2, status:false}       
      ]
    }
    
    
    public openNewTemplateDialog(id) {
      let dialogRef = this.dialog.open(AddEmailTemplateComponent, {
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
