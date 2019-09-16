import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AddIPartnerComponent } from './add-i-partner/add-i-partner.component';

@Component({
  selector: 'app-imaging-partners',
  templateUrl: './imaging-partners.component.html',
  styleUrls: ['./imaging-partners.component.scss']
})
export class ImagingPartnersComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id:1 , partner:"Fabrice Vanegas" , email:"fabrice@gmail.com" , phone:"408-444-0058", status:true },
    {id:2 , partner:"Stephen McGill" , email:"Stephen@gmail.com" , phone:"127-256-5528", status:true },
    {id:3 , partner:"Otto Rieder" , email:"Rieder@gmail.com" , phone:"647-210-9935", status:false },
    {id:4 , partner:"Joe Deu-Ngoc" , email:"Deu-Ngoc@gmail.com" , phone:"657-2506-0096", status:false },
    {id:5 , partner:"Chris Soles" , email:"Chris@gmail.com" , phone:"987-236-5858", status:false }       
    ]
}


public openPartnerDialog(id) {
let dialogRef = this.dialog.open(AddIPartnerComponent, {
    data: id,
    height: 'auto',
    width: '600px'
});
dialogRef.afterClosed().subscribe(data => {
});
}

deletePartner(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
