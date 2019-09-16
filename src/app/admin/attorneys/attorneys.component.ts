import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AddAttorneyComponent } from './add-attorney/add-attorney.component';

@Component({
  selector: 'app-attorneys',
  templateUrl: './attorneys.component.html',
  styleUrls: ['./attorneys.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AttorneysComponent implements OnInit {

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
          {id:1 , attorney:"Fabrice Vanegas" , email:"fabrice@gmail.com" , phone:"408-444-0058", status:true },
          {id:2 , attorney:"Stephen McGill" , email:"Stephen@gmail.com" , phone:"127-256-5528", status:true },
          {id:3 , attorney:"Otto Rieder" , email:"Rieder@gmail.com" , phone:"647-210-9935", status:false },
          {id:4 , attorney:"Joe Deu-Ngoc" , email:"Deu-Ngoc@gmail.com" , phone:"657-2506-0096", status:true },
          {id:5 , attorney:"Chris Soles" , email:"Chris@gmail.com" , phone:"987-236-5858", status:false }       
          ]
    }
    

    public openAttorneyDialog(id) {
      let dialogRef = this.dialog.open(AddAttorneyComponent, {
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
