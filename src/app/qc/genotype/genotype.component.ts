import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { GenotypePieComponent } from './genotype-pie/genotype-pie.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QcService } from '../qc.service';

@Component({
  selector: 'app-genotype',
  templateUrl: './genotype.component.html',
  styleUrls: ['./genotype.component.scss']
})
export class GenotypeComponent implements OnInit {
  PatientList: any;
  pagePatientList: any;
  tableList: any;
  config: any;
  pieChartData = [];

  AbyATotal = 0;
  AbyTTotal = 0;
  AbyGTotal = 0;
  GbyCTotal = 0;
  GbyTTotal = 0;
  GbyGTotal = 0;
  CbyCTotal = 0;
  CbyTTotal = 0;
  TbyTTotal = 0;

  public pageSize = 10;
  public pageSizeTemp = this.pageSize;
  public currentPage = 0;
  public totalSize = 0;
  public currentPageTemp = 0;
  public totalSizeTemp = 0;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  filterToggle: boolean;
  show: boolean;
  filterForm: FormGroup;

  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, private _fb: FormBuilder, public qcService: QcService,
    private alertService: AlertService) {
    this.filterForm = this._fb.group({
      'keyWord': [null]
    });
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
    this.getGenoType();
  }

  getGenoType() {
    this.filterForm.reset();
    this.qcService.getqclist().subscribe(
      data => {
        console.log(data)
        this.PatientList = data['QCList'];
        if (this.PatientList != null && this.PatientList.length >= 0) {
          this.pagePatientList = this.PatientList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

          for (let i = 0; i < this.PatientList.length; i++) {
            this.AbyATotal = this.AbyATotal + this.PatientList[i].AbyA;
          }
          this.pieChartData.push({
            name: 'A/A',
            value: this.AbyATotal
          })
          for (let i = 0; i < this.PatientList.length; i++) {
            this.AbyTTotal = this.AbyTTotal + this.PatientList[i].AbyT;
          }
          this.pieChartData.push({
            name: 'A/T',
            value: this.AbyTTotal
          })
          for (let i = 0; i < this.PatientList.length; i++) {
            this.AbyGTotal = this.AbyGTotal + this.PatientList[i].AbyG;
          }
          this.pieChartData.push({
            name: 'A/G',
            value: this.AbyGTotal
          })
          for (let i = 0; i < this.PatientList.length; i++) {
            this.GbyCTotal = this.GbyCTotal + this.PatientList[i].GbyC;
          }
          this.pieChartData.push({
            name: 'G/C',
            value: this.GbyCTotal
          })
          for (let i = 0; i < this.PatientList.length; i++) {
            this.GbyTTotal = this.GbyTTotal + this.PatientList[i].GbyT;
          }
          this.pieChartData.push({
            name: 'G/T',
            value: this.GbyTTotal
          })
          for (let i = 0; i < this.PatientList.length; i++) {
            this.GbyGTotal = this.GbyGTotal + this.PatientList[i].GbyG;
          }
          this.pieChartData.push({
            name: 'G/G',
            value: this.GbyGTotal
          })
          for (let i = 0; i < this.PatientList.length; i++) {
            this.CbyCTotal = this.CbyCTotal + this.PatientList[i].CbyC;
          }
          this.pieChartData.push({
            name: 'C/C',
            value: this.CbyCTotal
          })
          for (let i = 0; i < this.PatientList.length; i++) {
            this.CbyTTotal = this.CbyTTotal + this.PatientList[i].CbyT;
          }
          this.pieChartData.push({
            name: 'C/T',
            value: this.CbyTTotal
          })
          for (let i = 0; i < this.PatientList.length; i++) {
            this.TbyTTotal = this.TbyTTotal + this.PatientList[i].TbyT;
          }
          this.pieChartData.push({
            name: 'T/T',
            value: this.TbyTTotal
          })

          localStorage.setItem('genoTypePieChartData', JSON.stringify(this.pieChartData));
        }
        this.totalSize = this.PatientList != null ? this.PatientList.length : 0;
      }
    );
  }

  public openpieDataDialog(id, item) {
    let GenotypeSingle = [];
    let total = item.AbyA + item.AbyT + item.AbyG + item.GbyC + item.GbyT + item.GbyG + item.CbyC + item.CbyT + item.TbyT
    GenotypeSingle.push({
      name: 'A/A',
      value: ((item.AbyA / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'A/T',
      value: ((item.AbyT / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'A/G',
      value: ((item.AbyG / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'G/C',
      value: ((item.GbyC / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'G/T',
      value: ((item.GbyT / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'G/G',
      value: ((item.GbyG / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'C/C',
      value: ((item.CbyC / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'C/T',
      value: ((item.CbyT / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'T/T',
      value: ((item.TbyT / total) * 100).toFixed(1)
    })


    let dialogRef = this.dialog.open(GenotypePieComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    (<GenotypePieComponent>dialogRef.componentInstance).id = id;
    (<GenotypePieComponent>dialogRef.componentInstance).GenotypeSingle = GenotypeSingle;
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  filterBy(formValues) {
    console.log(formValues, 'filter values')
    console.log(formValues.keyWord, 'formValues.keyWord')

    let events = this.PatientList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.PatientList = filteredEvents;
      this.pagePatientList = this.PatientList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.AbyATotal = 0;
    this.AbyTTotal = 0;
    this.AbyGTotal = 0;
    this.GbyCTotal = 0;
    this.GbyTTotal = 0;
    this.GbyGTotal = 0;
    this.CbyCTotal = 0;
    this.CbyTTotal = 0;
    this.TbyTTotal = 0;
    this.currentPage = 0;
    this.pageSize = 10;
    this.getGenoType();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pagePatientList = this.PatientList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pagePatientList = this.PatientList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
  }

}
