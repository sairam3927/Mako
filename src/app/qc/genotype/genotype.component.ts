import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { GenotypePieComponent } from './genotype-pie/genotype-pie.component';

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
      { id: 1, GenotypeAT:"12",GenotypeAG:"12",GenotypeAC:"12",GenotypeGC:"12",GenotypeGT:"12",GenotypeGG:"12",GenotypeCC:"12",GenotypeCT:"12",GenotypeTT:"12",GenotypeAA:"12",Gene:"LCT", rsID:"rs10120572"},
      { id: 2, GenotypeAT:"21",GenotypeAG:"21",GenotypeAC:"21",GenotypeGC:"21",GenotypeGT:"21",GenotypeGG:"21",GenotypeCC:"21",GenotypeCT:"21",GenotypeTT:"21",GenotypeAA:"21",Gene:"TPK", rsID:"rs10135928"},
      { id: 3, GenotypeAT:"15",GenotypeAG:"15",GenotypeAC:"15",GenotypeGC:"15",GenotypeGT:"15",GenotypeGG:"15",GenotypeCC:"15",GenotypeCT:"15",GenotypeTT:"15",GenotypeAA:"15",Gene:"ERG", rsID:"rs1049434"},
      { id: 4, GenotypeAT:"30",GenotypeAG:"30",GenotypeAC:"30",GenotypeGC:"30",GenotypeGT:"30",GenotypeGG:"30",GenotypeCC:"30",GenotypeCT:"30",GenotypeTT:"30",GenotypeAA:"30",Gene:"FUTB", rsID:"rs1051266"},
      { id: 5, GenotypeAT:"45",GenotypeAG:"45",GenotypeAC:"45",GenotypeGC:"45",GenotypeGT:"45",GenotypeGG:"45",GenotypeCC:"45",GenotypeCT:"45",GenotypeTT:"45",GenotypeAA:"45",Gene:"LCT", rsID:"rs1052700"},
      { id: 6, GenotypeAT:"44",GenotypeAG:"44",GenotypeAC:"44",GenotypeGC:"44",GenotypeGT:"44",GenotypeGG:"44",GenotypeCC:"44",GenotypeCT:"44",GenotypeTT:"44",GenotypeAA:"44",Gene:"FUTB", rsID:"rs10741657"},
      { id: 7, GenotypeAT:"15",GenotypeAG:"15",GenotypeAC:"15",GenotypeGC:"15",GenotypeGT:"15",GenotypeGG:"15",GenotypeCC:"15",GenotypeCT:"15",GenotypeTT:"15",GenotypeAA:"15",Gene:"LCT", rsID:"rs10766197"},
      { id: 8, GenotypeAT:"65",GenotypeAG:"65",GenotypeAC:"65",GenotypeGC:"65",GenotypeGT:"65",GenotypeGG:"65",GenotypeCC:"65",GenotypeCT:"65",GenotypeTT:"65",GenotypeAA:"65",Gene:"ERG", rsID:"rs10820799"},
      { id: 9, GenotypeAT:"20",GenotypeAG:"20",GenotypeAC:"20",GenotypeGC:"20",GenotypeGT:"20",GenotypeGG:"20",GenotypeCC:"20",GenotypeCT:"20",GenotypeTT:"20",GenotypeAA:"20",Gene:"FUTB", rsID:"rs10842994"},
      { id: 10,GenotypeAT:"11",GenotypeAG:"11",GenotypeAC:"11",GenotypeGC:"11",GenotypeGT:"11",GenotypeGG:"11",GenotypeCC:"11",GenotypeCT:"11",GenotypeTT:"11",GenotypeAA:"11",Gene:"LCT",rsID:"rs10877012"},
      { id: 11,GenotypeAT:"37",GenotypeAG:"37",GenotypeAC:"37",GenotypeGC:"37",GenotypeGT:"37",GenotypeGG:"37",GenotypeCC:"37",GenotypeCT:"37",GenotypeTT:"37",GenotypeAA:"37",Gene:"ERG",rsID:"rs1109859"},
      { id: 12,GenotypeAT:"78",GenotypeAG:"78",GenotypeAC:"78",GenotypeGC:"78",GenotypeGT:"78",GenotypeGG:"78",GenotypeCC:"78",GenotypeCT:"78",GenotypeTT:"78",GenotypeAA:"78",Gene:"FUTB",rsID:"rs11126936"},
      { id: 13,GenotypeAT:"25",GenotypeAG:"25",GenotypeAC:"25",GenotypeGC:"25",GenotypeGT:"25",GenotypeGG:"25",GenotypeCC:"25",GenotypeCT:"25",GenotypeTT:"25",GenotypeAA:"25",Gene:"LCT",rsID:"rs11144134"},
      { id: 14,GenotypeAT:"21",GenotypeAG:"21",GenotypeAC:"21",GenotypeGC:"21",GenotypeGT:"21",GenotypeGG:"21",GenotypeCC:"21",GenotypeCT:"21",GenotypeTT:"21",GenotypeAA:"21",Gene:"FUTB",rsID:"rs11235972"},
      { id: 15,GenotypeAT:"65",GenotypeAG:"65",GenotypeAC:"65",GenotypeGC:"65",GenotypeGT:"65",GenotypeGG:"65",GenotypeCC:"65",GenotypeCT:"65",GenotypeTT:"65",GenotypeAA:"65",Gene:"ERG",rsID:"rs1149222"},
      { id: 16,GenotypeAT:"45",GenotypeAG:"45",GenotypeAC:"45",GenotypeGC:"45",GenotypeGT:"45",GenotypeGG:"45",GenotypeCC:"45",GenotypeCT:"45",GenotypeTT:"45",GenotypeAA:"45",Gene:"TPK",rsID:"rs11557927"},
      { id: 17,GenotypeAT:"55",GenotypeAG:"55",GenotypeAC:"55",GenotypeGC:"55",GenotypeGT:"55",GenotypeGG:"55",GenotypeCC:"55",GenotypeCT:"55",GenotypeTT:"55",GenotypeAA:"55",Gene:"LCT",rsID:"rs11599710"},
      { id: 18,GenotypeAT:"45",GenotypeAG:"45",GenotypeAC:"45",GenotypeGC:"45",GenotypeGT:"45",GenotypeGG:"45",GenotypeCC:"45",GenotypeCT:"45",GenotypeTT:"45",GenotypeAA:"45",Gene:"TPK",rsID:"rs11640851"},
      { id: 19,GenotypeAT:"75",GenotypeAG:"75",GenotypeAC:"75",GenotypeGC:"75",GenotypeGT:"75",GenotypeGG:"75",GenotypeCC:"75",GenotypeCT:"75",GenotypeTT:"75",GenotypeAA:"75",Gene:"LCT",rsID:"rs11656665"},
      { id: 20,GenotypeAT:"56",GenotypeAG:"56",GenotypeAC:"56",GenotypeGC:"56",GenotypeGT:"56",GenotypeGG:"56",GenotypeCC:"56",GenotypeCT:"56",GenotypeTT:"56",GenotypeAA:"56",Gene:"ERG",rsID:"rs11950646"}
    ];
  }

  deletePatientOrder() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }
  public openpieeDataDialog() {
    let dialogRef = this.dialog.open(GenotypePieComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
