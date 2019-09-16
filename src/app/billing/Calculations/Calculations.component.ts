import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddCalcComponent } from './add-calc/add-calc.component';

@Component({
  selector: 'app-Calculations',
  templateUrl: './Calculations.component.html',
  styleUrls: ['./Calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  List:any;

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  constructor(public dialog: MatDialog,private alertService : AlertService) {
    }
  ngOnInit() {
    this.List = [
      {id: "",ResultCode:"ALGO-E-ATGG",ResultTitle:"Algorithm Vitamin E",ResultValue:"1",ResultType:"Interim",ReportType:"NA",ReportVariable:"-",Steps:"1",CalculationDone:"checked"},
      {id: "",ResultCode:"ALGO-E-ATGG",ResultTitle:"Algorithm ATGG",ResultValue:"1",ResultType:"Final",ReportType:"Both Reports",ReportVariable:"",Steps:"4",CalculationDone:"checked"},
      {id: "",ResultCode:"ALGO-E-ATGG",ResultTitle:"Algorithm Vitamin E",ResultValue:"1",ResultType:"Final",ReportType:"Only Detailed Report",ReportVariable:"",Steps:"2",CalculationDone:""},
      {id: "",ResultCode:"ALGO-E-ATGG",ResultTitle:"Algorithm Vitamin E",ResultValue:"1",ResultType:"Final",ReportType:"Only Summary Report",ReportVariable:"",Steps:"6",CalculationDone:"checked"},
    ];
  }

  deletePatientOrder(){
    this.alertService.createAlert('Successfully deleted.', 1);
  }

  public addCalcDialog() {
    let dialogRef = this.dialog.open(AddCalcComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
