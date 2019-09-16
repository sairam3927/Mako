import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AddCptCodeComponent } from './add-cpt-code/add-cpt-code.component';

@Component({
  selector: 'app-manage-cpt-codes',
  templateUrl: './manage-cpt-codes.component.html',
  styleUrls: ['./manage-cpt-codes.component.scss']
})
export class ManageCptCodesComponent implements OnInit {

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
    {id:1 , cptCode:"94375" , cptDescription:"RESPIRATORY FLOW VOLUME L" , priceOneInn: "201.80" , priceTwoOon:"484.32" , priceThreeInn:"40.36" , priceFourOon:"0" , rvu:"0" , quickCodes:"1" , icd:"19" , cpt:"1" , attorney:"Fabrice Vanegas" , email:"fabrice@gmail.com" , phone:"408-444-0058", status:true },
    {id:2 , cptCode:"94150" , cptDescription:"VITAL CAPACITY TEST" , attorney:"Stephen McGill" , priceOneInn: "129.75" , priceTwoOon:"311.40" , priceThreeInn:"25.95" , priceFourOon:"0" , rvu:"0" , quickCodes:"1" , icd:"19" , cpt:"1" , email:"Stephen@gmail.com" , phone:"127-256-5528", status:true },
    {id:3 , cptCode:"94729" , cptDescription:"CO/MEMBANE DIFFUSE CAPACI" , priceOneInn: "281.10" , cpt:"1" , priceTwoOon:"674.64" , priceThreeInn:"56.22" , priceFourOon:"0" , rvu:"0" , quickCodes:"1" , icd:"19" , attorney:"Otto Rieder" , email:"Rieder@gmail.com" , phone:"647-210-9935", status:false },
    {id:4 , cptCode:"94728" , cptDescription:"PULM FUNCT TEST OSCILLOME" , cpt:"1" , priceOneInn: "207.20" , attorney:"Joe Deu-Ngoc" , email:"Deu-Ngoc@gmail.com" , priceTwoOon:"497.28" , priceThreeInn:"41.44" , priceFourOon:"0" , rvu:"0" , quickCodes:"1" , icd:"19" , phone:"657-2506-0096", status:true },
    {id:5 , cptCode:"93015" , cptDescription:"CARDIOVASCULAR STRESS TES" , cpt:"1" , priceOneInn: "362.20" , attorney:"Chris Soles" , email:"Chris@gmail.com" , phone:"987-236-5858" , priceTwoOon:"869.28" , priceThreeInn:"72.44" , priceFourOon:"0" , rvu:"0" , quickCodes:"1" , icd:"19" , status:false }       
    ]
}


public openCPTDialog(id) {
let dialogRef = this.dialog.open(AddCptCodeComponent, {
    data: id,
    height: 'auto',
    width: '600px'
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteCPTCode(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
