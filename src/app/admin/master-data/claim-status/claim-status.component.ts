import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddClaimStatusComponent } from './add-claim-status/add-claim-status.component';

@Component({
  selector: 'app-claim-status',
  templateUrl: './claim-status.component.html',
  styleUrls: ['./claim-status.component.scss']
})
export class ClaimStatusComponent implements OnInit {

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
    {claimStatus: "Submitted" , status:true },
    {claimStatus: "Pending" , status:true },
    {claimStatus: "In Draft" , status:true },
    {claimStatus: "Cancelled" , status:true },
    {claimStatus: "Paid" , status:true }       
    ]
}


public openClaimDialog(id) {
let dialogRef = this.dialog.open(AddClaimStatusComponent, {
    data: id,
    height: 'auto',
    width: '600px'
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteClaimStatus(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
