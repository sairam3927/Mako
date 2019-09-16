import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddNewOrderDialogComponent } from './add-new-order-dialog/add-new-order-dialog.component';
import { AddInsuranceDialogComponent } from './add-insurance-dialog/add-insurance-dialog.component';

@Component({
  selector: 'app-add-new-order',
  templateUrl: './add-new-order.component.html',
  styleUrls: ['./add-new-order.component.scss']
})
export class AddNewOrderComponent implements OnInit {

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
        {id:1 , firstName:"Fabrice" , lastName:"Vanegas", dob:"02/05/1964", orderId:"1257963" , orderingPhysician:"David", receivedDate:"03/03/2019",insurance:2},
        {id:2 , firstName:"Stephen" , lastName:"McGill", dob:"09/07/1985", orderId:"5897429" , orderingPhysician:"Stokes", receivedDate:"21/04/2019",insurance:1},
        {id:3 , firstName:"Otto" , lastName:"Rieder", dob:"25/11/2010", orderId:"2368254" , orderingPhysician:"Morgan", receivedDate:"29/04/2019",insurance:1},
        {id:4 , firstName:"Joe" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderId:"1289637" , orderingPhysician:"Steven", receivedDate:"17/05/2019",insurance:2},
        {id:5 , firstName:"Chris" , lastName:"Soles", dob:"31/01/2000", orderId:"2345873" , orderingPhysician:"Liam Plunkeet", receivedDate:"22/05/2019",insurance:2}       
      ]
    }
    
    
    public openNewPatientDialog(id) {
      let dialogRef = this.dialog.open(AddNewOrderDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    public openPatientInsuranceDialog(id) {
      let dialogRef = this.dialog.open(AddInsuranceDialogComponent, {
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
