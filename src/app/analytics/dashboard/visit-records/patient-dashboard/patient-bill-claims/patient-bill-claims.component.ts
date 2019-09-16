import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';

@Component({
  selector: 'app-patient-bill-claims',
  templateUrl: './patient-bill-claims.component.html',
  styleUrls: ['./patient-bill-claims.component.scss']
})
export class PatientBillClaimsComponent implements OnInit {

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
   {visit:"Visit-1 08/08/2019 9:30PM" , symptoms:"Back Pain" , attorney:"Mark Wood" , insurance:"Aetna PRO" , claimRef:"110021" , schDate:"08/05/2018" , claimAmount:"$ 5000" , recDate:"08/06/2019" , recAmount:"$ 2250"},
   {visit:"Visit-2 08/09/2019 15:30PM" , symptoms:"Hair line Fracture" , attorney:"Jonny Bairstow" , insurance:"Aetna PRO" , claimRef:"201547" , schDate:"08/07/2018" , claimAmount:"$ 8000" , recDate:"08/07/2019" , recAmount:"$ 5417"}, 
    ]
}




deleteAttorney(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
