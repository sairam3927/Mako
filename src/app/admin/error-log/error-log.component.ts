import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-error-log',
  templateUrl: './error-log.component.html',
  styleUrls: ['./error-log.component.scss']
})
export class ErrorLogComponent implements OnInit {

 
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
         {errorMessage:"Error at forgotPassword : Something went wrong" , createdBy:"Staff User" , createdDate:"2019-02-01 13:35:07"},
         {errorMessage:"Error at getAttorneys : undefined" , createdBy:"Admin" , createdDate:"2019-02-01 13:55:04"},
         {errorMessage:"Error at addUser : Something went wrong" , createdBy:"Staff User" , createdDate:"2019-02-04 06:09:59"},
         {errorMessage:"Error at updateInternalPhysician : Physician not found" , createdBy:"Admin" , createdDate:"2019-02-04 07:04:37"},
         {errorMessage:"Error at getSettings : Something went wrong" , createdBy:"Admin" , createdDate:"2019-02-08 16:36:35"}       
          ]
    }
    

   

  deleteAttorney(){
    //this.alertService.createAlert('Successfully deleted.', 1);
}
}
