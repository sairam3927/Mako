import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddBusinessCenterComponent } from './add-business-center/add-business-center.component';

@Component({
  selector: 'app-business-centers',
  templateUrl: './business-centers.component.html',
  styleUrls: ['./business-centers.component.scss']
})
export class BusinessCentersComponent implements OnInit {

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
    {businessCenter:"Core Health" , state:"New York" , city : "San Francisco" , status:true },
    {businessCenter:"Sapphire MD" , state:"New Jersey" , city : "Los Angeles" , status:true},
    {businessCenter:"Pain Allieviation" , state:"Texas" , city : "Chicago" , status:true},
    {businessCenter:"Centre for Pain Relief" , state:"Virginia" , city : "Boston" , status:true},
    {businessCenter:"Prime Orthopedics" , state:"Vermont" , city : "Austin" , status:true},      
    ]
}


public openBusinessDialog(id) {
let dialogRef = this.dialog.open(AddBusinessCenterComponent, {
    data: id,
    height: 'auto',
    width: '600px'
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteBusinessCenter(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
