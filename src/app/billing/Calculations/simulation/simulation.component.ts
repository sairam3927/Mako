import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { RestrictionComponent } from 'src/app/shared/restriction/restriction.component';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  CreatePermission: any;
  ReadPermission: any;
  UpdatePermission: any;
  DeletePermission: any;

  List: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  constructor(public dialog: MatDialog, private alertService: AlertService) {
  }

  ngOnInit() {

    let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
    // console.log('Permissions: ', getPermissions);

    if (getPermissions) {
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Simulation') {
          this.CreatePermission = getPermissions[i]['Create']
          this.ReadPermission = getPermissions[i]['Read']
          this.UpdatePermission = getPermissions[i]['Update']
          this.DeletePermission = getPermissions[i]['Delete']
        }
      }
    }
    // console.log(this.CreatePermission, 'CreatePermission');
    // console.log(this.ReadPermission, 'ReadPermission');
    // console.log(this.UpdatePermission, 'UpdatePermission');
    // console.log(this.DeletePermission, 'DeletePermission');

    this.List = [
      { id: "", ResultCode: "ALGO-E-ATGG", ResultTitle: "Algorithm Vitamin E", TestName: "Congenital lactase deficiency", ResultValue: "1", ResultType: "Interim", ReportType: "NA", ReportVariable: "-", Steps: "1", CalculationDone: "checked" },
      { id: "", ResultCode: "ALGO-E-ATGG", ResultTitle: "Algorithm ATGG", TestName: "THIAMINE (VITAMIN B1)", ResultValue: "1", ResultType: "Final", ReportType: "Both Reports", ReportVariable: "", Steps: "4", CalculationDone: "checked" },
      { id: "", ResultCode: "ALGO-E-ATGG", ResultTitle: "Algorithm Vitamin E", TestName: "Congenital lactase deficiency", ResultValue: "1", ResultType: "Final", ReportType: "Only Detailed Report", ReportVariable: "", Steps: "2", CalculationDone: "" },
      { id: "", ResultCode: "ALGO-E-ATGG", ResultTitle: "Algorithm Vitamin E", TestName: "THIAMINE (VITAMIN B1)", ResultValue: "1", ResultType: "Final", ReportType: "Only Summary Report", ReportVariable: "", Steps: "6", CalculationDone: "checked" },
    ];
  }

  deletePatientOrder() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

  public restrictionDialog(action) {
    let dialogRef = this.dialog.open(RestrictionComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    (<RestrictionComponent>dialogRef.componentInstance).action = action;
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
