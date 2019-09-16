import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AddIcdCodeComponent } from './add-icd-code/add-icd-code.component';

@Component({
  selector: 'app-manage-icd-codes',
  templateUrl: './manage-icd-codes.component.html',
  styleUrls: ['./manage-icd-codes.component.scss']
})
export class ManageIcdCodesComponent implements OnInit {
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
    {id:1 , icdCode:"R011" , icdDescription:"Undiagnosed cardiac murmu" , cpt:"1" , attorney:"Fabrice Vanegas" , email:"fabrice@gmail.com" , phone:"408-444-0058", status:true },
    {id:2 , icdCode:"I509" , icdDescription:"CHF" , attorney:"Stephen McGill" , cpt:"1" , email:"Stephen@gmail.com" , phone:"127-256-5528", status:true },
    {id:3 , icdCode:"R221" , icdDescription:"LOCALIZED SWELLING" , cpt:"1" , attorney:"Otto Rieder" , email:"Rieder@gmail.com" , phone:"647-210-9935", status:false },
    {id:4 , icdCode:"R946" , icdDescription:"Abnormal thyroid function" , cpt:"1" , attorney:"Joe Deu-Ngoc" , email:"Deu-Ngoc@gmail.com" , phone:"657-2506-0096", status:true },
    {id:5 , icdCode:"R590" , icdDescription:"Enlarged lymph nodes" , cpt:"1" , attorney:"Chris Soles" , email:"Chris@gmail.com" , phone:"987-236-5858", status:false }       
    ]
}


public openICDDialog(id) {
let dialogRef = this.dialog.open(AddIcdCodeComponent, {
    data: id,
    height: 'auto',
    width: '600px'
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteICDCode(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
