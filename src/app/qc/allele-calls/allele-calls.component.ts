import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SingleAlleleCallPieComponent } from './single-allele-call-pie/single-allele-call-pie.component';
import { AppSettings } from 'src/app/app.settings';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QcService } from '../qc.service';

@Component({
  selector: 'app-allele-calls',
  templateUrl: './allele-calls.component.html',
  styleUrls: ['./allele-calls.component.scss']
})
export class AlleleCallsComponent implements OnInit {

  PatientList: any;
  pagePatientList: any;
  tableList: any;
  config: any;
  pieChartData = [];

  AbsentTotal = 0;
  HeterozygousTotal = 0;
  HomozygousTotal = 0;
  NoCallTotal = 0;

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

  public searchText: string;
  public page: any;
  filterForm: FormGroup;

  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, private _fb: FormBuilder,
    private alertService: AlertService, public qcService: QcService) {
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
    this.getAllelCall()
  }

  getAllelCall() {
    this.filterForm.reset();
    this.qcService.getqclist().subscribe(
      data => {
        console.log(data)
        this.PatientList = data['QCList'];
        if (this.PatientList != null && this.PatientList.length >= 0) {
          this.pagePatientList = this.PatientList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

          for (let i = 0; i < this.pagePatientList.length; i++) {
            this.AbsentTotal = this.AbsentTotal + this.pagePatientList[i].AlleleCount;
          }
          this.pieChartData.push({
            name: 'Absent',
            value: this.AbsentTotal
          })
          for (let i = 0; i < this.pagePatientList.length; i++) {
            this.HeterozygousTotal = this.HeterozygousTotal + this.pagePatientList[i].HeterozygousCount
          }
          this.pieChartData.push({
            name: 'Heterozygous',
            value: this.HeterozygousTotal
          })
          for (let i = 0; i < this.pagePatientList.length; i++) {
            this.HomozygousTotal = this.HomozygousTotal + this.pagePatientList[i].HomozygousCount
          }
          this.pieChartData.push({
            name: 'Homozygous',
            value: this.HomozygousTotal
          })
          for (let i = 0; i < this.pagePatientList.length; i++) {
            this.NoCallTotal = this.NoCallTotal + this.pagePatientList[i].NocallCount;
          }
          this.pieChartData.push({
            name: 'No Call',
            value: this.NoCallTotal
          })
          localStorage.setItem('AllelPieChartData', JSON.stringify(this.pieChartData));
        }
        this.totalSize = this.PatientList != null ? this.PatientList.length : 0;
      }
    );
  }

  public openpieDataDialog(id, item) {
    let GenotypeSingle = [];
    let total = item.AlleleCount + item.HeterozygousCount + item.HomozygousCount + item.NocallCount
    GenotypeSingle.push({
      name: 'Absent',
      value: ((item.AlleleCount / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'Heterozygous',
      value: ((item.HeterozygousCount / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'Homozygous',
      value: ((item.HomozygousCount / total) * 100).toFixed(1)
    })
    GenotypeSingle.push({
      name: 'No Call',
      value: ((item.NocallCount / total) * 100).toFixed(1)
    })
    let dialogRef = this.dialog.open(SingleAlleleCallPieComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    (<SingleAlleleCallPieComponent>dialogRef.componentInstance).id = id;
    (<SingleAlleleCallPieComponent>dialogRef.componentInstance).Single = GenotypeSingle;
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
    this.AbsentTotal = 0;
    this.HeterozygousTotal = 0;
    this.HomozygousTotal = 0;
    this.NoCallTotal = 0;
    this.currentPage = 0;
    this.pageSize = 10;
    this.getAllelCall();
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
