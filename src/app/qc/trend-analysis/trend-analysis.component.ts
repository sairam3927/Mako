import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-trend-analysis',
  templateUrl: './trend-analysis.component.html',
  styleUrls: ['./trend-analysis.component.scss']
})
export class TrendAnalysisComponent implements OnInit {

  public pageSize = 10;
  public pageSizeTemp = this.pageSize;
  public currentPage = 0;
  public totalSize = 0;
  public currentPageTemp = 0;
  public totalSizeTemp = 0;

  allele1freq: any;
  allele2freq: any;
  allele1stdev: any;
  allele2stdev: any;
  tableList: any;
  config: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  filterToggle: boolean;
  year = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
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
    this.allele1freq = [
      { id: 1, Jan: "0.72", Feb: "0.73", Mar: "0.81", Apr: "0.78", May: "0.65", Jun: "0.72", Jul: "0.72", Aug: "0.87", Sep: "0.78", Oct: "0.62", Nov: "0.53", Dec: "0.77", Overall: "0.73", rsID: "rs10120572" },
      { id: 2, Jan: "0.37", Feb: "0.37", Mar: "0.33", Apr: "0.43", May: "0.34", Jun: "0.38", Jul: "0.37", Aug: "0.37", Sep: "0.43", Oct: "0.62", Nov: "0.47", Dec: "0.37", Overall: "0.36", rsID: "rs10135928" },
      { id: 3, Jan: "0.00", Feb: "0.00", Mar: "0.00", Apr: "0.00", May: "0.00", Jun: "0.00", Jul: "0.00", Aug: "0.00", Sep: "0.00", Oct: "0.00", Nov: "0.00", Dec: "0.00", Overall: "0.00", rsID: "rs1049434" },
      { id: 4, Jan: "0.29", Feb: "0.31", Mar: "0.11", Apr: "0.21", May: "0.09", Jun: "0.12", Jul: "0.26", Aug: "0.45", Sep: "0.32", Oct: "0.27", Nov: "0.24", Dec: "0.29", Overall: "0.22", rsID: "rs1051266" },
      { id: 5, Jan: "0.37", Feb: "0.37", Mar: "0.33", Apr: "0.43", May: "0.34", Jun: "0.38", Jul: "0.37", Aug: "0.37", Sep: "0.43", Oct: "0.62", Nov: "0.47", Dec: "0.37", Overall: "0.61", rsID: "rs1052700" }
      // { id: 6, Jan:"44",Feb:"44",Mar:"44",Apr:"44",May:"44",Jun:"44",Jul:"44",Aug:"44",Sep:"44",Oct:"44",Nov:"FUTB",Dec:"", rsID:"rs10741657"},
      // { id: 7, Jan:"15",Feb:"15",Mar:"15",Apr:"15",May:"15",Jun:"15",Jul:"15",Aug:"15",Sep:"15",Oct:"15",Nov:"LCT",Dec:"", rsID:"rs10741657"},
      // { id: 8, Jan:"65",Feb:"65",Mar:"65",Apr:"65",May:"65",Jun:"65",Jul:"65",Aug:"65",Sep:"65",Oct:"65",Nov:"ERG",Dec:"", rsID:"rs10741657"},
      // { id: 9, Jan:"20",Feb:"20",Mar:"20",Apr:"20",May:"20",Jun:"20",Jul:"20",Aug:"20",Sep:"20",Oct:"20",Nov:"FUTB",Dec:"", rsID:"rs10741657"},
      // { id: 10,Jan:"11",Feb:"11",Mar:"11",Apr:"11",May:"11",Jun:"11",Jul:"11",Aug:"11",Sep:"11",Oct:"11",Nov:"LCT",Dec:"",rsID:"rs10877012"}
    ];
    this.allele2freq = [
      { id: 1, Jan: "0.72", Feb: "0.73", Mar: "0.81", Apr: "0.78", May: "0.65", Jun: "0.72", Jul: "0.72", Aug: "0.87", Sep: "0.78", Oct: "0.62", Nov: "0.53", Dec: "0.77", Overall: "0.73", rsID: "rs10120572" },
      { id: 2, Jan: "0.37", Feb: "0.37", Mar: "0.33", Apr: "0.43", May: "0.34", Jun: "0.38", Jul: "0.37", Aug: "0.37", Sep: "0.43", Oct: "0.62", Nov: "0.47", Dec: "0.37", Overall: "0.36", rsID: "rs10135928" },
      { id: 3, Jan: "0.00", Feb: "0.00", Mar: "0.00", Apr: "0.00", May: "0.00", Jun: "0.00", Jul: "0.00", Aug: "0.00", Sep: "0.00", Oct: "0.00", Nov: "0.00", Dec: "0.00", Overall: "0.00", rsID: "rs1049434" },
      { id: 4, Jan: "0.29", Feb: "0.31", Mar: "0.11", Apr: "0.21", May: "0.09", Jun: "0.12", Jul: "0.26", Aug: "0.45", Sep: "0.32", Oct: "0.27", Nov: "0.24", Dec: "0.29", Overall: "0.22", rsID: "rs1051266" },
      { id: 5, Jan: "0.37", Feb: "0.37", Mar: "0.33", Apr: "0.43", May: "0.34", Jun: "0.38", Jul: "0.37", Aug: "0.37", Sep: "0.43", Oct: "0.62", Nov: "0.47", Dec: "0.37", Overall: "0.61", rsID: "rs1052700" }
      // { id: 6, Jan:"44",Feb:"44",Mar:"44",Apr:"44",May:"44",Jun:"44",Jul:"44",Aug:"44",Sep:"44",Oct:"44",Nov:"FUTB",Dec:"", rsID:"rs10741657"},
      // { id: 7, Jan:"15",Feb:"15",Mar:"15",Apr:"15",May:"15",Jun:"15",Jul:"15",Aug:"15",Sep:"15",Oct:"15",Nov:"LCT",Dec:"", rsID:"rs10766197"},
      // { id: 8, Jan:"65",Feb:"65",Mar:"65",Apr:"65",May:"65",Jun:"65",Jul:"65",Aug:"65",Sep:"65",Oct:"65",Nov:"ERG",Dec:"", rsID:"rs10820799"},
      // { id: 9, Jan:"20",Feb:"20",Mar:"20",Apr:"20",May:"20",Jun:"20",Jul:"20",Aug:"20",Sep:"20",Oct:"20",Nov:"FUTB",Dec:"", rsID:"rs10842994"},
      // { id: 10,Jan:"11",Feb:"11",Mar:"11",Apr:"11",May:"11",Jun:"11",Jul:"11",Aug:"11",Sep:"11",Oct:"11",Nov:"LCT",Dec:"",rsID:"rs10877012"}
    ];
    this.allele1stdev = [
      { id: 1, Jan: "0.72", Feb: "0.73", Mar: "0.81", Apr: "0.78", May: "0.65", Jun: "0.72", Jul: "0.72", Aug: "0.87", Sep: "0.78", Oct: "0.62", Nov: "0.53", Dec: "0.77", Overall: "0.73", rsID: "rs10120572" },
      { id: 2, Jan: "0.37", Feb: "0.37", Mar: "0.33", Apr: "0.43", May: "0.34", Jun: "0.38", Jul: "0.37", Aug: "0.37", Sep: "0.43", Oct: "0.62", Nov: "0.47", Dec: "0.37", Overall: "0.36", rsID: "rs10135928" },
      { id: 3, Jan: "0.00", Feb: "0.00", Mar: "0.00", Apr: "0.00", May: "0.00", Jun: "0.00", Jul: "0.00", Aug: "0.00", Sep: "0.00", Oct: "0.00", Nov: "0.00", Dec: "0.00", Overall: "0.00", rsID: "rs1049434" },
      { id: 4, Jan: "0.29", Feb: "0.31", Mar: "0.11", Apr: "0.21", May: "0.09", Jun: "0.12", Jul: "0.26", Aug: "0.45", Sep: "0.32", Oct: "0.27", Nov: "0.24", Dec: "0.29", Overall: "0.22", rsID: "rs1051266" },
      { id: 5, Jan: "0.37", Feb: "0.37", Mar: "0.33", Apr: "0.43", May: "0.34", Jun: "0.38", Jul: "0.37", Aug: "0.37", Sep: "0.43", Oct: "0.62", Nov: "0.47", Dec: "0.37", Overall: "0.61", rsID: "rs1052700" }
      // { id: 6, Jan:"44",Feb:"44",Mar:"44",Apr:"44",May:"44",Jun:"44",Jul:"44",Aug:"44",Sep:"44",Oct:"44",Nov:"FUTB",Dec:"", rsID:"rs10741657"},
      // { id: 7, Jan:"15",Feb:"15",Mar:"15",Apr:"15",May:"15",Jun:"15",Jul:"15",Aug:"15",Sep:"15",Oct:"15",Nov:"LCT",Dec:"", rsID:"rs10766197"},
      // { id: 8, Jan:"65",Feb:"65",Mar:"65",Apr:"65",May:"65",Jun:"65",Jul:"65",Aug:"65",Sep:"65",Oct:"65",Nov:"ERG",Dec:"", rsID:"rs10820799"},
      // { id: 9, Jan:"20",Feb:"20",Mar:"20",Apr:"20",May:"20",Jun:"20",Jul:"20",Aug:"20",Sep:"20",Oct:"20",Nov:"FUTB",Dec:"", rsID:"rs10842994"},
      // { id: 10,Jan:"11",Feb:"11",Mar:"11",Apr:"11",May:"11",Jun:"11",Jul:"11",Aug:"11",Sep:"11",Oct:"11",Nov:"LCT",Dec:"",rsID:"rs10877012"}
    ];
    this.allele2stdev = [
      { id: 1, Jan: "0.72", Feb: "0.73", Mar: "0.81", Apr: "0.78", May: "0.65", Jun: "0.72", Jul: "0.72", Aug: "0.87", Sep: "0.78", Oct: "0.62", Nov: "0.53", Dec: "0.77", Overall: "0.73", rsID: "rs10120572" },
      { id: 2, Jan: "0.37", Feb: "0.37", Mar: "0.33", Apr: "0.43", May: "0.34", Jun: "0.38", Jul: "0.37", Aug: "0.37", Sep: "0.43", Oct: "0.62", Nov: "0.47", Dec: "0.37", Overall: "0.36", rsID: "rs10135928" },
      { id: 3, Jan: "0.00", Feb: "0.00", Mar: "0.00", Apr: "0.00", May: "0.00", Jun: "0.00", Jul: "0.00", Aug: "0.00", Sep: "0.00", Oct: "0.00", Nov: "0.00", Dec: "0.00", Overall: "0.00", rsID: "rs1049434" },
      { id: 4, Jan: "0.29", Feb: "0.31", Mar: "0.11", Apr: "0.21", May: "0.09", Jun: "0.12", Jul: "0.26", Aug: "0.45", Sep: "0.32", Oct: "0.27", Nov: "0.24", Dec: "0.29", Overall: "0.22", rsID: "rs1051266" },
      { id: 5, Jan: "0.37", Feb: "0.37", Mar: "0.33", Apr: "0.43", May: "0.34", Jun: "0.38", Jul: "0.37", Aug: "0.37", Sep: "0.43", Oct: "0.62", Nov: "0.47", Dec: "0.37", Overall: "0.61", rsID: "rs1052700" }
      // { id: 6, Jan:"44",Feb:"44",Mar:"44",Apr:"44",May:"44",Jun:"44",Jul:"44",Aug:"44",Sep:"44",Oct:"44",Nov:"FUTB",Dec:"", rsID:"rs10741657"},
      // { id: 7, Jan:"15",Feb:"15",Mar:"15",Apr:"15",May:"15",Jun:"15",Jul:"15",Aug:"15",Sep:"15",Oct:"15",Nov:"LCT",Dec:"", rsID:"rs10766197"},
      // { id: 8, Jan:"65",Feb:"65",Mar:"65",Apr:"65",May:"65",Jun:"65",Jul:"65",Aug:"65",Sep:"65",Oct:"65",Nov:"ERG",Dec:"", rsID:"rs10820799"},
      // { id: 9, Jan:"20",Feb:"20",Mar:"20",Apr:"20",May:"20",Jun:"20",Jul:"20",Aug:"20",Sep:"20",Oct:"20",Nov:"FUTB",Dec:"", rsID:"rs10842994"},
      // { id: 10,Jan:"11",Feb:"11",Mar:"11",Apr:"11",May:"11",Jun:"11",Jul:"11",Aug:"11",Sep:"11",Oct:"11",Nov:"LCT",Dec:"",rsID:"rs10877012"}
    ];
  }

}
