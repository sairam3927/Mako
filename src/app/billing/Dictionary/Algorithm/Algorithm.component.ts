import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddAlgorithmComponent } from './addAlgorithm/addAlgorithm.component';
import { UploadComponent } from './upload/upload.component';
import { PersonalComponent } from '../Personal/Personal.component';

@Component({
  selector: 'app-Algorithm',
  templateUrl: './Algorithm.component.html',
  styleUrls: ['./Algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit {

  List:any;
  filterToggle:boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
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
      {id:"1",Reference:"LCDrs121908936",Test:"LCD TEST",AllelName:"s121908936",Parameter:"TPK1", Call_Reference:"Absent"},
      {id:"2",Reference:"ADArs0316787",Test:"LCD TEST",AllelName:"rs121908936",Parameter:"LCT", Call_Reference:"Heterozygous"},
      {id:"3",Reference:"LCDrs121908936",Test:"TPK1 TEST",AllelName:"s121908936",Parameter:"TPK1" ,Call_Reference:"Homozygous"},
      {id:"4",Reference:"ADArs0316787",Test:"TPK1 TEST",AllelName:"rs228584",Parameter:"TPK1", Call_Reference:"Absent"},
      {id:"5",Reference:"LCDrs121908936",Test:"ADA TEST",AllelName:"s121908936",Parameter:"LCT", Call_Reference:"Absent"},
      {id:"6",Reference:"ADArs0316787",Test:"ADA TEST",AllelName:"rs6031682",Parameter:"ADA", Call_Reference:"Heterozygous"},
      {id:"7",Reference:"LCDrs121908936",Test:"CHOLINE TEST",AllelName:"s121908936",Parameter:"LCT", Call_Reference:"Homozygous"},
      {id:"8",Reference:"ADArs0316787",Test:"CHOLINE TEST",AllelName:"rs7946",Parameter:"PEMT", Call_Reference:"Heterozygous"},
      {id:"9",Reference:"LCDrs121908936",Test:"CHOLINE TEST",AllelName:"rs7639752",Parameter:"PCYT1A", Call_Reference:"Absent"},
      {id:"10",Reference:"ADArs0316787",Test:"CHOLINE TEST",AllelName:"rs6445606",Parameter:"CHDH", Call_Reference:"Heterozygous"},
      {id:"11",Reference:"LCDrs121908936",Test:"CHOLINE TEST",AllelName:"rs3764897",Parameter:"PLD2", Call_Reference:"Homozygous"},
    ]
  }

  public addAlgorithmDialog() {
    let dialogRef = this.dialog.open(AddAlgorithmComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
      
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public addUploadDialog() {
    let dialogRef = this.dialog.open(UploadComponent, {
      height: 'auto',
      width: '400px',
      autoFocus: false,
      
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public patientDataDialog() {
    let dialogRef = this.dialog.open(PersonalComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deletePatientOrder(){
    this.alertService.createAlert('Successfully deleted.', 1);       
  }
  
}
