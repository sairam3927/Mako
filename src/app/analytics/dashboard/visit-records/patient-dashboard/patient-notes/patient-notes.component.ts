import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { AddNoteComponent } from './add-note/add-note.component'

@Component({
  selector: 'app-patient-notes',
  templateUrl: './patient-notes.component.html',
  styleUrls: ['./patient-notes.component.scss']
})
export class PatientNotesComponent implements OnInit {

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
          {visit:"Visit-1 08/08/2019 9:30PM" , symptoms:"Accident" , note:"Neck or shoulder pain or stiffness,Numbness" , recordedBy:"Candice"},
          {visit:"Visit-2 08/09/2019 15:30PM" , symptoms:"Right rib fracture" , note:"Right rib fracture observed " , recordedBy:"Staff User"},
          {visit:"Visit-3 08/10/2019 11:45PM" , symptoms:"Left leg hair line fracture" , note:"X-Ray reveals hair line fracture on the left leg" , recordedBy:"Gilchrist"},     
          ]
    }
    

    public openNoteDialog(id) {
      let dialogRef = this.dialog.open(AddNoteComponent, {
          data: id,
          height: 'auto',
          width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
  }

  deleteAttorney(){
    //this.alertService.createAlert('Successfully deleted.', 1);
}

}
