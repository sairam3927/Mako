import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-genotype',
  templateUrl: './genotype.component.html',
  styleUrls: ['./genotype.component.scss']
})
export class GenotypeComponent implements OnInit {
  patientList: any;
  tableList: any;
  config: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  filterToggle: boolean;
  show: boolean;

  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    private alertService: AlertService) {
    this.settings = this.appSettings.settings;
  }

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
    this.show = !this.show;
  }
  public dateTime2: Date;
  public dateTime3: Date;
  referringOptions = ["Stephen McGill", "Otto Rieder", "Joe Deu-Ngoc", "Chris Soles", "Brad Kewalramani", "Michael Persaud", "Habib Kharsa"];
  stepsOptionSelected: any;
  age = [">30", "<30", ">=50", "<=50"];
  onStepsOptionsSelected(event) {
    console.log(event);
  }
  ngOnInit() {
    this.patientList = [
      { id: 1, rsID:"rs10120572",Absent:"500",Heterozygous:"25",Homozygous:"5",NoCall:"25" },
      { id: 2, rsID:"rs10135928",Absent:"500",Heterozygous:"250",Homozygous:"500",NoCall:"1" },
      { id: 3, rsID:"rs1049434",Absent:"300",Heterozygous:"300",Homozygous:"300",NoCall:"0" },
      { id: 4, rsID:"rs1051266",Absent:"1000",Heterozygous:"25",Homozygous:"0",NoCall:"0" },
      { id: 5, rsID:"rs1052700",Absent:"500",Heterozygous:"25",Homozygous:"5",NoCall:"25" },
      { id: 6, rsID:"rs10741657",Absent:"300",Heterozygous:"250",Homozygous:"500",NoCall:"1" },
      { id: 7, rsID:"rs10766197",Absent:"500",Heterozygous:"300",Homozygous:"300",NoCall:"0" },
      { id: 8, rsID:"rs10820799",Absent:"800",Heterozygous:"25",Homozygous:"0",NoCall:"0" },
      { id: 9, rsID:"rs10842994",Absent:"500",Heterozygous:"25",Homozygous:"5",NoCall:"0" },
      { id: 10,rsID:"rs10877012",Absent:"300",Heterozygous:"250",Homozygous:"500",NoCall:"1" },
      { id: 11,rsID:"rs1109859",Absent:"500",Heterozygous:"300",Homozygous:"300",NoCall:"0" },
      { id: 12,rsID:"rs11126936",Absent:"800",Heterozygous:"25",Homozygous:"0",NoCall:"25" },
      { id: 13,rsID:"rs11144134",Absent:"500",Heterozygous:"25",Homozygous:"5",NoCall:"0" },
      { id: 14,rsID:"rs11235972",Absent:"300",Heterozygous:"250",Homozygous:"500",NoCall:"1" },
      { id: 15,rsID:"rs1149222",Absent:"500",Heterozygous:"300",Homozygous:"300",NoCall:"0" },
      { id: 16,rsID:"rs11557927",Absent:"800",Heterozygous:"25",Homozygous:"0",NoCall:"25" },
      { id: 17,rsID:"rs11599710",Absent:"500",Heterozygous:"25",Homozygous:"5",NoCall:"25" },
      { id: 18,rsID:"rs11640851",Absent:"300",Heterozygous:"250",Homozygous:"500",NoCall:"1" },
      { id: 19,rsID:"rs11656665",Absent:"500",Heterozygous:"300",Homozygous:"300",NoCall:"0" },
      { id: 20,rsID:"rs11950646",Absent:"800",Heterozygous:"25",Homozygous:"0",NoCall:"0" }
    ];
  }

  deletePatientOrder() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

}
