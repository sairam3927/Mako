import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMessageComponent } from './addMessage/addMessage.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { BillingService } from '../../billing.service';
import { MessagesUploadComponent } from './messages-upload/messages-upload.component';
import { PersonalComponent } from '../Personal/Personal.component';

@Component({
  selector: 'app-Messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss']
})
export class MessagesComponent implements OnInit {

  List = [
    { id: "1", Reference:"rs121908936A/ALCT",AlleleName: "rs121908936", Gene: "LCT", Combination: "A/A", Guideline: "This genotype is normal.", TargetResolution: "1.40", TargetMessage: "1,4",TBD:"2.4", Comment: "In the absence of other causes, the newborn can consume breast milk / formula containing lactose." },
    { id: "2", Reference:"rs121908936B/ALCT",AlleleName: "rs121908936", Gene: "LCT", Combination: "T/T", Guideline: "This genotype associates with congenital lactase deficiency. You will deinitely transmit a copy of the mutation to your child", TargetResolution: "1.40", TargetMessage: "5",TBD:"4.9", Comment: "It may be necessary to test the other parent or the fetus / newborn." },
    { id: "3", Reference:"rs121908936C/ALCT",AlleleName: "rs121908936", Gene: "LCT", Combination: "A/T", Guideline: "Having this genotype, You can transmit a copy of the mutation to your", TargetResolution: "1.00", TargetMessage: "450",TBD:"6", Comment: "It may be necessary to test the other parent or the fetus / newborn." },
    { id: "4", Reference:"rs121908936D/ALCT",AlleleName: "rs228584", Gene: "TPK1", Combination: "C/C", Guideline: "This maternal genotype requires in increase intake of Thiamine(Vitamin B1) during pregnancy and breastfeeding.", TargetResolution: "1.00", TargetMessage: "1000",TBD:"6", Comment: "Daily Thiamine intake of at least 5 mg during pregnancy and lactation." },
    { id: "5", Reference:"rs121908936E/ALCT",AlleleName: "rs228584", Gene: "TPK1", Combination: "C/T", Guideline: "This maternal genotype requires in increase intake of Thiamine(Vitamin B1) during pregnancy and breastfeeding.", TargetResolution: "2.00", TargetMessage: "1,4",TBD:"8", Comment: "Daily Thiamine intake of at least 5 mg during pregnancy and lactation." },
    { id: "6", Reference:"rs121908936F/ALCT",AlleleName: "rs228584", Gene: "TPK1", Combination: "T/T", Guideline: "This maternal genotype does not change the standard recommendations for Thiamine (Vitamin B1) intake during pregnancy and breastfeeding.", TargetResolution: "1.00", TargetMessage: "5",TBD:"6.5", Comment: "Daily Thiamine intake of at least 1,4 mg during pregnancy and lactation." },
    { id: "7", Reference:"rs121908936G/ALCT",AlleleName: "rs6031682", Gene: "ADA", Combination: "G/G", Guideline: "This maternal genotype requires no action regarding Adenosine intake during pregnancy and breastfeeding.", TargetResolution: "1.40", TargetMessage: "450",TBD:"9", Comment: "In the absence of other causes, the newborn can consume breast milk / formula containing lactose." },
    { id: "7", Reference:"rs121908936H/ALCT",AlleleName: "rs6031682", Gene: "ADA", Combination: "G/C", Guideline: "This maternal genotype requires no action regarding Adenosine intake during pregnancy and breastfeeding.", TargetResolution: "2.00", TargetMessage: "1000",TBD:"11", Comment: "It may be necessary to test the other parent or the fetus / newborn." },
    { id: "7", Reference:"rs121908936T/ALCT",AlleleName: "rs6031682", Gene: "ADA", Combination: "C/C", Guideline: "This maternal genotype requires a reduction of Adenosine intake from foods, during pregnancy and breastfeeding.", TargetResolution: "1.00", TargetMessage: "1,4",TBD:"13", Comment: "It may be necessary to test the other parent or the fetus / newborn." },
  ]
  filterToggle:boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }


  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialog: MatDialog, private alertService: AlertService, private myService: BillingService) {
    this.myService.myMethod(this.List);
  }
  ngOnInit() {
  }

  public addMessageDialog() {
    let dialogRef = this.dialog.open(AddMessageComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public uploadDialog() {
    let dialogRef = this.dialog.open(MessagesUploadComponent, {
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

  deletePatientOrder() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

}
